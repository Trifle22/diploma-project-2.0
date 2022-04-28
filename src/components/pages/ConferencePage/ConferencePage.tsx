import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { ConferenceContainer } from './ConferenceContainer';
import { selectConference } from '../../../slices/conference';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: spacing(1),
    }
}));

export const ConferencePage = () => {
    const conference = useSelector(selectConference);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ConferenceContainer conference={conference} />
        </div>
    );
};
