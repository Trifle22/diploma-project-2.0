import { createSlice } from '@reduxjs/toolkit';
import { pastConferencesEntityAdapter } from './pastConferencesEntityAdapter';

export const pastConferencesSlice = createSlice({
    name: 'pastConferences',
    initialState: pastConferencesEntityAdapter.getInitialState(),
    reducers: {
        pastConferencesReceived: pastConferencesEntityAdapter.setAll,
        pastConferencesDeleted: pastConferencesEntityAdapter.removeOne,
    }
});
