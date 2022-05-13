import React, { Dispatch, SetStateAction } from 'react';
import { EnableVideoButton } from '../../ConferencePage/ControlButtons/EnableVideoButton';
import { DisableVideoButton } from '../../ConferencePage/ControlButtons/DisableVideoButton';

interface Props {
    videoState: boolean;
    setVideoState: Dispatch<SetStateAction<boolean>>;
}

export const VideoControlButton = ({ videoState, setVideoState }: Props) => {
    const enableVideo = () => {
        setVideoState(true)
    }

    const disableVideo = () => {
        setVideoState(false)
    }

    if (!videoState) return <EnableVideoButton onClick={enableVideo} />;

    return <DisableVideoButton onClick={disableVideo} />;
}
