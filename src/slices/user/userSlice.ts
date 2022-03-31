import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';

const initialState = {} as User | Record<string, never>;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogined: (state, action: PayloadAction<User>) => action.payload,
        userReset: () => ({})
    }
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
