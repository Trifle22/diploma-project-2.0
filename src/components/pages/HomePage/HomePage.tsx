import React from 'react';
import { makeStyles } from '@material-ui/core';
import { GoToConferenceWidget } from './Widgets/GoToConferenceWidget';
import { CreateConferenceWidget } from './Widgets/CreateConferenceWidget';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        gap: spacing(5),
        paddingTop: spacing(2),
        paddingBottom: spacing(1),
        paddingLeft: spacing(2)
    }
}));

export const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GoToConferenceWidget />
            <CreateConferenceWidget />
        </div>
    );
};
