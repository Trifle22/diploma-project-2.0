import React, { Dispatch, SetStateAction } from 'react';
import { DisableVideoButton } from './DisableVideoButton';
import { EnableVideoButton } from './EnableVideoButton';

export enum VideoState {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE'
}

interface Props {
    onClick: Dispatch<SetStateAction<VideoState>>;
    videoState: VideoState;
}

export const BaseVideoControlButton = ({ onClick, videoState }: Props) => {
    const enableVideo = () => {
        onClick(VideoState.ENABLE);
    };
    const disableVideo = () => {
        onClick(VideoState.DISABLE);
    };

    if (videoState === VideoState.DISABLE) return <EnableVideoButton onClick={enableVideo} />;

    return <DisableVideoButton onClick={disableVideo} />;
};
