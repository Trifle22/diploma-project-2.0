import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../../../../../types/types';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        alignSelf: 'flex-start',
        padding: spacing(1),
        backgroundColor: '#27AE60',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: spacing(0, 0, 1, 0),
        maxWidth: '45%',
        minWidth: '40%',
        whiteSpace: 'normal',
        overflowWrap: 'break-word'
    },
    name: {
        fontWeight: 'bold',
        alignSelf: 'start'
    },
    timestamp: {
        alignSelf: 'flex-end',
    },
    text: {
        alignSelf: 'flex-start'
    }
}))

interface Props {
    text: string;
    author: User;
    timestamp: number;
}

export const OtherMessage = ({ text, author, timestamp }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" className={classes.name}>
                {author.name}
            </Typography>
            <Typography className={classes.text}>
                {text}
            </Typography>
            <Typography className={classes.timestamp} variant="caption">
                {new Date(timestamp).toLocaleDateString()}
            </Typography>
        </div>
    )
}
