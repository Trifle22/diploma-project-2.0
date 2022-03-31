import { createSelector } from '@reduxjs/toolkit';
import { ActionCreator } from 'redux';
import { getFetcherKey } from '../../components/helpers/getFetcherKey';
import { RootState } from '../../store';

export const createRequestStatusWithErrorSelector = (
    actions: ActionCreator<unknown>[]
) => createSelector(
    (state: RootState) => state.requestStates,
    requestStatusesDictionary => {
        const findKeys = actions.map(a => getFetcherKey(a));

        const requestStatusEntries = Object.entries(requestStatusesDictionary);

        const entryWithError = requestStatusEntries.find(([key, requestStatus]) => (
            findKeys.some(fk => key.includes(fk)) && requestStatus.error
        ));

        return entryWithError?.[1];
    }
);
