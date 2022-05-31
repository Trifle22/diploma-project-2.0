import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { MessagesStream } from './MessagesStream';
import { ChatForm } from './ChatForm';
import { selectMessages } from '../../../../../slices/chat';

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '590px',
        border: '1px solid #ccc',
        paddingBottom: spacing(1)
    }
}))

export const Chat = () => {
    const classes = useStyles();
    const messages = useSelector(selectMessages)

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <MessagesStream messages={messages} />
            </div>
            <ChatForm />
        </div>
    )
}
