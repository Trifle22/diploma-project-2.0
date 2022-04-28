import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conference } from '../../types/conference.types';
import { User, UserRole } from '../../types/types';
import { ConferenceType } from '../../components/pages/ConferencePage/types';

const initialState: Conference = {
    creator: {
        name: 'denis',
        id: 2,
        roles: [UserRole.ROLE_TEACHER, UserRole.ROLE_MODERATOR]
    },
    date: 1646914327570,
    duration: 560000,
    type: ConferenceType.WITH_VIDEO,
    participants: [
        {
            name: 'alex',
            id: 0,
            roles: [UserRole.ROLE_BASE]
        },
        {
            name: 'nastya',
            id: 1,
            roles: [UserRole.ROLE_BASE]

        },
        {
            name: 'denis',
            id: 2,
            roles: [UserRole.ROLE_BASE]

        },
        {
            name: 'danya',
            id: 3,
            roles: [UserRole.ROLE_BASE]

        },
        {
            name: 'liza',
            id: 4,
            roles: [UserRole.ROLE_BASE]

        },
        {
            name: 'valera',
            id: 5,
            roles: [UserRole.ROLE_BASE]

        },
        {
            name: 'vanya',
            id: 6,
            roles: [UserRole.ROLE_BASE]

        }
    ]
};

export const conferenceSlice = createSlice({
    name: 'conference',
    initialState,
    reducers: {
        addParticipant: (state, action: PayloadAction<User>) =>
            ({ ...state, participants: state.participants.concat(action.payload) }),
        removeParticipant: (state, action: PayloadAction<number>) => ({
            ...state, participants: state.participants.filter(p => p.id === action.payload)
        }),
        changeConferenceType: (state, action: PayloadAction<ConferenceType>) => ({
            ...state, type: action.payload
        })
    }
});
