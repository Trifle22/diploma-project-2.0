import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing(1)
    }
}));

export const NothingLoadedMessage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HourglassEmptyIcon color="primary" />
            <Typography>
                Загруженных документов нет
            </Typography>
        </div>
    );
};
