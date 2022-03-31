import { all, fork } from 'redux-saga/effects';
import { watchNotifications } from './notificationSagas/notificationsSaga';
import { watchGetPastConferencesSaga } from './pastConferences/getPastConferencesSaga';

export function* rootSaga() {
    yield fork(watchNotifications);
    yield all([
        watchGetPastConferencesSaga()
    ]);
}
