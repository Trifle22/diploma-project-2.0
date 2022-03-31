import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { RequestError } from '../../api/RESTCall/RequestError';
import { notifyError } from '../notificationSagas';
import { getFetcherKey } from '../../components/helpers/getFetcherKey';
import { convertErrorToString } from '../../components/helpers/convertErrorToString';
import { requestStatusActions } from '../../slices/requestStatusSlice';

const shouldShowAlert = (error: unknown) => (
    !(error instanceof RequestError) || error.code !== 401
);

export function* callFetchedSaga<T>(
    keyPattern: { toString: () => string; },
    worker: () => T,
    requestId?: string
) {
    const key = getFetcherKey(keyPattern, requestId);

    try {
        yield put(
            requestStatusActions.fetching({ key })
        );

        const response: T = yield call(worker);

        yield put(
            requestStatusActions.successFetched({ key })
        );

        return response;
    } catch (error) {
        const errorMessage = convertErrorToString(error);

        yield put(
            requestStatusActions.failedFetched({
                key, error: errorMessage
            })
        );

        if (shouldShowAlert(error)) {
            yield put(notifyError(errorMessage));
        }

        return undefined;
    }
}

export const createFetcherSaga = <P, R>(
    keyPatter: { toString: () => string; },
    saga: (payload: P) => R
) => (
    function* fetcher(action: Partial<PayloadAction<P, string, Record<'requestId', string>>>) {
        const { payload, meta } = action as PayloadAction<P, string, Record<'requestId', string>>;

        function* callSagaWithPayload() {
            return (yield call(saga, payload)) as R;
        }

        return (yield callFetchedSaga(keyPatter, callSagaWithPayload, meta?.requestId)) as R;
    }
);
