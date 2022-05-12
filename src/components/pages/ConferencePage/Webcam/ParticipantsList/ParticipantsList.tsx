import { makeStyles } from '@material-ui/core';
import React from 'react';
import { User } from '../../../../../types/types';
import { ParticipantCard } from './ParticipantCard';

interface Props {
    participants: User[];
}
const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '600px',
        gap: spacing(0.5),
        overflowY: 'auto',
    }
}));

export const ParticipantsList = ({ participants }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {participants.map((participant) => <ParticipantCard participant={participant} />)}
        </div>
    );
};
