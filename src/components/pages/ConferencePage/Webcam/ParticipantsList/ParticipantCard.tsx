import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { grey } from '@material-ui/core/colors';
import { User } from '../../../../../types/types';

interface Props {
    participant: User;
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: grey[900],
        minWidth: '300px',
        minHeight: '250px',
    },
    text: {
        color: 'white',
    }
}));

export const ParticipantCard = ({ participant }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {participant.name}
            </Typography>
        </div>
    );
};
