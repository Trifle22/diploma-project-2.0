import { makeStyles, Theme } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { Notification } from './Notification';

const useStyles = makeStyles<Theme>(({ palette }) => ({
    root: {
        backgroundColor: palette.success.main
    }
}));

export const SuccessfullNotification = forwardRef<HTMLDivElement, {
    id: string | number;
    message: string;
}>((props, ref) => {
    const {
        id, message
    } = props;

    const classes = useStyles();

    return <Notification id={id} message={message} classes={classes} ref={ref} />;
});
