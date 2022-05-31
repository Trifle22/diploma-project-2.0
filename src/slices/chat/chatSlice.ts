import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserRole } from '../../types/types';
import { Message, MessageType } from './types';

const initialState: Message[] = [{
    text: 'hello',
    timestamp: Date.now(),
    type: MessageType.OTHER_MESSAGE,
    author: {
        id: 0,
        name: 'alexander',
        roles: [UserRole.ROLE_BASE]
    }
}];

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => ([
            ...state, action.payload
        ])
    }
})
