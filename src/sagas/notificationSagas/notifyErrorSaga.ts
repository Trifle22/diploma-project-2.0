import { put, takeEvery } from 'redux-saga/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { showNotification } from './transportShowNotificationSaga';

type Payload = string;

export const notifyError = createAction<Payload>('notification/notifyError');

function* notifyErrorSaga({ payload: errorMessage }: PayloadAction<Payload>) {
    yield put(showNotification({
        message: errorMessage,
        options: {
            variant: 'error'
        }
    }));
}

export function* watchNotifyErrorSaga() {
    yield takeEvery(notifyError, notifyErrorSaga);
}
