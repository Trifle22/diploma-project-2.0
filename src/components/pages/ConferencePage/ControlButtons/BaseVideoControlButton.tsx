import React from 'react';
import { useDispatch } from 'react-redux';
import { DisableVideoButton } from './DisableVideoButton';
import { EnableVideoButton } from './EnableVideoButton';
import { individualConferenceSettingsActions } from '../../../../slices/individualConferenceSettings';

interface Props {
    videoState: boolean;
}

export const BaseVideoControlButton = ({ videoState }: Props) => {
    const dispatch = useDispatch();
    const enableVideo = () => {
        dispatch(individualConferenceSettingsActions.changeVideoMode(true));
    };
    const disableVideo = () => {
        dispatch(individualConferenceSettingsActions.changeVideoMode(false));
    };

    if (!videoState) return <EnableVideoButton onClick={enableVideo} />;

    return <DisableVideoButton onClick={disableVideo} />;
};
