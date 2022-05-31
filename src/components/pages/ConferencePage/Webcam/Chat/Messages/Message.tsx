import React from 'react';
import { MessageType, Message as MessageInterface } from '../../../../../../slices/chat/types';
import { MyMessage } from './MyMessage';
import { OtherMessage } from './OtherMessage';

interface Props {
    message: MessageInterface;
}

export const Message = ({ message }: Props) => {
    if (message.type === MessageType.MY_MESSAGE) {
        return (
            <MyMessage text={message.text} author={message.author} timestamp={message.timestamp} />
        )
    }
    return (
        <OtherMessage text={message.text} author={message.author} timestamp={message.timestamp} />
    )
}
