import { makeStyles } from '@material-ui/core';
import React from 'react';
import { AudioRecorder } from './AudioRecorder/AudioRecorder';
import { VideoRecorder } from './VideoRecorder/VideoRecorder';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-start',
        gap: spacing(2),
        paddingTop: spacing(2),
        paddingBottom: spacing(1),
        paddingLeft: spacing(2)
    }
}))

export const SettingsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AudioRecorder />
            <VideoRecorder />
        </div>
    )
}
