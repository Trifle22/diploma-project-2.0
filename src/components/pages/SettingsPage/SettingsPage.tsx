import { makeStyles } from '@material-ui/core';
import React from 'react';
import { AudioRecorder } from './AudioRecorder/AudioRecorder';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        gap: spacing(5),
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
        </div>
    )
}
