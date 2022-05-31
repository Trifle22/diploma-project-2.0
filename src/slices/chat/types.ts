import { User } from '../../types/types';

export enum MessageType {
    OTHER_MESSAGE = 'OTHER_MESSAGE',
    MY_MESSAGE = 'MY_MESSAGE'
}

export type Message = {
    text: string;
    type: MessageType;
    author: User;
    timestamp: number;
}
