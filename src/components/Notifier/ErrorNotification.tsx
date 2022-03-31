import { makeStyles, Theme } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { Notification } from './Notification';

const useStyles = makeStyles<Theme>(({ palette }) => ({
    root: {
        backgroundColor: palette.error.main
    }
}));

export const ErrorNotification = forwardRef<HTMLDivElement, {
    id: string | number;
    message: string;
}>((props, ref) => {
    const {
        id, message
    } = props;

    const classes = useStyles();

    return <Notification id={id} message={message} ref={ref} classes={classes} showCopyButton />;
});
