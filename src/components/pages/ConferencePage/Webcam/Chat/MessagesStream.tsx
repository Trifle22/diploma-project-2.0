import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Message as MessageInterface } from '../../../../../slices/chat/types';
import { Message } from './Messages';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: spacing(2),
        height: '100%',
        width: '500px',
        overflowY: 'auto',
    }
}))

interface Props {
    messages: MessageInterface[];
}

export const MessagesStream = ({ messages }: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {messages.map(msg => <Message message={msg} />)}
        </div>
    )
}
