import { createSlice } from '@reduxjs/toolkit';
import { pastConferencesEntityAdapter } from './pastConferencesEntityAdapter';

export const pastConferencesSlice = createSlice({
    name: 'pastConferences',
    initialState: pastConferencesEntityAdapter.getInitialState(),
    reducers: {
        hierarchicalSourcesReceived: pastConferencesEntityAdapter.setAll,
        hierarchicalSourceDeleted: pastConferencesEntityAdapter.removeOne,
    }
});
