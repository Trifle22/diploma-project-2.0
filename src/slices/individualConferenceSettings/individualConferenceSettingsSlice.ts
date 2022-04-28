import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IndividualConferenceSettings {
    video: boolean;
    audio: boolean;
}

const initialState: IndividualConferenceSettings = {
    video: false,
    audio: false
};

export const individualConferenceSettingsSlice = createSlice({
    name: 'individualConferenceSettings',
    initialState,
    reducers: {
        changeVideoMode: ((state, action: PayloadAction<boolean>) => ({
            ...state, video: action.payload
        })),
        changeAudioMode: ((state, action: PayloadAction<boolean>) => ({
            ...state, audio: action.payload
        }))
    }
});
