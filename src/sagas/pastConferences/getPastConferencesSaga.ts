import { createAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PastConference } from '../../components/pages/PastConferencesPage/PastConferencesTable/types';
import { pastConferencesActions } from '../../slices/pastConferences';
import { createFetcherSaga } from '../common/createFetcherSaga';
import { pastConferencesApi } from '../../api/apiRest/pastConferencesApi';
import { pastConferencesMock } from '../../api/jsonMocks/mocks';

export const getPastConferencesActionCreator = createAction('pastConferences/getAll');

function* getPastConferencesSaga() {
    const pastConferences: PastConference[] = yield call(pastConferencesApi.getAllConferences);
    console.log(pastConferences);

    yield put(pastConferencesActions.pastConferencesReceived(pastConferencesMock));
}

const fetchGetPastConferencesSaga = createFetcherSaga(getPastConferencesActionCreator, getPastConferencesSaga);

export function* watchGetPastConferencesSaga() {
    yield takeLatest(getPastConferencesActionCreator, fetchGetPastConferencesSaga);
}
