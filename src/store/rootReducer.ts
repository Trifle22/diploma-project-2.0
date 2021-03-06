import { combineReducers } from '@reduxjs/toolkit';
import { pastConferencesReducer } from '../slices/pastConferences';
import { requestStatusReducer } from '../slices/requestStatusSlice';
import { userReducer } from '../slices/user/userSlice';
import { conferenceReducer } from '../slices/conference';
import { individualConferenceSettingsReducer } from '../slices/individualConferenceSettings';
import { chatReducer } from '../slices/chat';

export const rootReducer = combineReducers({
    userState: userReducer,
    pastConferences: pastConferencesReducer,
    individualConferenceSettings: individualConferenceSettingsReducer,
    requestStates: requestStatusReducer,
    conference: conferenceReducer,
    chat: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>;
