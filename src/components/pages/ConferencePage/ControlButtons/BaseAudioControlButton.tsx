import React from 'react';
import { useDispatch } from 'react-redux';
import { individualConferenceSettingsActions } from '../../../../slices/individualConferenceSettings';
import { DisableAudioButton } from './DisableAudioButton';
import { EnableAudioButton } from './EnableAudioButton';

interface Props {
    audioState: boolean;
}

export const BaseAudioControlButton = ({ audioState }: Props) => {
    const dispatch = useDispatch();
    const enableVideo = () => {
        dispatch(individualConferenceSettingsActions.changeAudioMode(true));
    };
    const disableVideo = () => {
        dispatch(individualConferenceSettingsActions.changeAudioMode(false));
    };

    if (!audioState) return <EnableAudioButton onClick={enableVideo} />;

    return <DisableAudioButton onClick={disableVideo} />;
};
