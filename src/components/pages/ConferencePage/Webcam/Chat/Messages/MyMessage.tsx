import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { User } from '../../../../../../types/types';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        alignSelf: 'flex-end',
        padding: spacing(1),
        backgroundColor: '#5DADE2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: spacing(0, 0, 0, 1),
        maxWidth: '45%',
        minWidth: '40%',
        overflowWrap: 'break-word',
    },
    name: {
        fontWeight: 'bold',
        alignSelf: 'end'
    },
    timestamp: {
        alignSelf: 'flex-start'
    },
    text: {
        alignSelf: 'end'
    }
}))

interface Props {
    text: string;
    author: User;
    timestamp: number;
}

export const MyMessage = ({ text, author, timestamp }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" className={classes.name}>
                {author.name}
            </Typography>
            <Typography className={classes.text}>
                {text}
            </Typography>
            <Typography variant="caption" className={classes.timestamp}>
                {new Date(timestamp).toLocaleDateString()}
            </Typography>
        </div>
    )
}
