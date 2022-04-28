import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { BaseVideoControlButton } from '../ControlButtons';
import { VideoPlug } from './VideoPlug';
import { VideoView } from './VideoView';
import {
    selectVideoSetting
} from '../../../../slices/individualConferenceSettings/individualConferenceSettingsSelectors';

const useStyles = makeStyles(() => ({
    root: {
        height: '70vh',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    paper: {
        height: '100%',
        width: '100%'
    }
}));

export const WebcamView = () => {
    const classes = useStyles();
    const videoState = useSelector(selectVideoSetting);
    let content;

    if (!videoState) {
        content = <VideoPlug />;
    } else {
        content = <VideoView />;
    }

    return (
        <div className={classes.root}>
            {content}
            <BaseVideoControlButton videoState={videoState} />
        </div>
    );
};
