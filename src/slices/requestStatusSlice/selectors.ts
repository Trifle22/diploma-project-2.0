import { ActionCreator } from 'redux';
import { getFetcherKey } from '../../components/helpers/getFetcherKey';
import { RootState } from '../../store';
import { RequestState, RequestStatus } from './types';

export const selectRequestState = (rootState: RootState, key: string): RequestState | undefined => (
    rootState.requestStates[key]
);

export const selectReducedRequestStatus = (
    state: RootState,
    actions: ActionCreator<unknown>[],
    requestId?: string
) => {
    const reducedRequestsState = {
        loading: false,
        error: undefined as undefined | string
    };

    actions.forEach(a => {
        const fetcherKey = getFetcherKey(a, requestId);
        const requestState = selectRequestState(state, fetcherKey);

        reducedRequestsState.loading = reducedRequestsState.loading || requestState?.status === RequestStatus.Loading;
        reducedRequestsState.error = reducedRequestsState.error || requestState?.error;
    });

    return reducedRequestsState;
};
