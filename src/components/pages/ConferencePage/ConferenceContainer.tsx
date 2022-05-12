import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Conference } from './types';
import { ConfDescription } from './ConfDescription';
import { ConferenceTabs } from './ConferenceTabs/ConferenceTabs';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        gap: spacing(2)
    }
}));

interface Props {
    conference: Conference;
}

export const ConferenceContainer = ({ conference }: Props) => {
    const {
        type, duration, creator, date
    } = conference;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ConfDescription type={type} duration={duration} creator={creator.name} date={date} />
            <ConferenceTabs conference={conference} />
        </div>
    );
};
