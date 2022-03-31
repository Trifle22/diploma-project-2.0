import { takeEvery } from 'redux-saga/effects';
import { watchNotifyErrorSaga } from './notifyErrorSaga';
import { showNotification, transportShowNotificationSaga } from './transportShowNotificationSaga';

export function* watchNotifications() {
    yield takeEvery(showNotification, transportShowNotificationSaga);
    yield watchNotifyErrorSaga();
}
