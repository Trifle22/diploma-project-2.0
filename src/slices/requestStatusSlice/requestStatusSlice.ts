import { createSlice } from '@reduxjs/toolkit';
import {
    FailedRequestAction, RequestStatusAction, RequestState, RequestStatus
} from './types';

const initialState: Record<string, RequestState> = {};

const requestStatusSlice = createSlice({
    name: 'requestStatus',
    initialState,
    /* eslint-disable no-param-reassign */
    reducers: {
        fetching: (state, { payload: { key } }: RequestStatusAction) => {
            state[key] = {
                error: undefined,
                status: RequestStatus.Loading
            };
        },
        successFetched: (state, { payload: { key } }: RequestStatusAction) => {
            state[key].status = RequestStatus.Success;
        },
        failedFetched: (state, { payload: { key, error } }: FailedRequestAction) => {
            state[key].status = RequestStatus.Fail;
            state[key].error = error;
        },
        requestStatusDeleted: (state, { payload: { key } }: RequestStatusAction) => {
            delete state[key];
        }
    }
    /* eslint-enable no-param-reassign */
});

const { actions, reducer } = requestStatusSlice;

export {
    actions as requestStatusActions,
    reducer as requestStatusReducer
};
