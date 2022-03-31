import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { NotificationActionPayload } from '../../components/Notifier/types';
import { transportChannel } from '../../components/common/hooks/useTransportSagaRunner';

export const showNotification = createAction<NotificationActionPayload, 'notification/show'>('notification/show');

export function* transportShowNotificationSaga(action: ReturnType<typeof showNotification>) {
    yield put(transportChannel, showNotification(action.payload));
}
