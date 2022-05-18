import { makeStyles } from '@material-ui/core';
import React from 'react';
import { AudioRecorder } from './AudioRecorder/AudioRecorder';
import { VideoRecorder } from './VideoRecorder/VideoRecorder';
import { ChangeName } from './ChangeName/ChangeName';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: spacing(2),
        paddingTop: spacing(2),
        paddingBottom: spacing(1),
        paddingLeft: spacing(2),
    },
    row: {
        display: 'flex',
        gap: spacing(2),
    }
}))

export const SettingsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <AudioRecorder />
                <ChangeName />
            </div>
            <VideoRecorder />
        </div>
    )
}
