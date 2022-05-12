import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { BaseVideoControlButton } from '../ControlButtons';
import { VideoPlug } from './VideoPlug';
import { VideoView } from './VideoView';
import {
    selectAudioSetting,
    selectVideoSetting
} from '../../../../slices/individualConferenceSettings/individualConferenceSettingsSelectors';
import { BaseAudioControlButton } from '../ControlButtons/BaseAudioControlButton';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    container: {
        maxHeight: '600px',
        maxWidth: '800px',

    },
    controlButtons: {
        display: 'flex',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

export const WebcamView = () => {
    const classes = useStyles();
    const videoState = useSelector(selectVideoSetting);
    const audioState = useSelector(selectAudioSetting);

    let content;

    if (!videoState) {
        content = (
            <div className={classes.container}>
                <VideoPlug />
            </div>
        );
    } else {
        content = (
            <div className={classes.container}>
                <VideoView audioState={audioState} />
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {content}
            <div className={classes.controlButtons}>
                <BaseVideoControlButton videoState={videoState} />
                <BaseAudioControlButton audioState={audioState} />
            </div>
        </div>
    );
};
