import { combineReducers } from '@reduxjs/toolkit';
import { pastConferencesReducer } from '../slices/pastConferences';
import { requestStatusReducer } from '../slices/requestStatusSlice';
import { userReducer } from '../slices/user/userSlice';

export const rootReducer = combineReducers({
    userState: userReducer,
    pastConferences: pastConferencesReducer,
    requestStates: requestStatusReducer
});

export type RootState = ReturnType<typeof rootReducer>;
