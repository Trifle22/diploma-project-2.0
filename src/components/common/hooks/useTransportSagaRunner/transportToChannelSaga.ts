import {
    take, put, all, fork
} from 'redux-saga/effects';
import { stdChannel } from 'redux-saga';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Action } from 'redux';

export const transportChannel = stdChannel();

function* transferActionSaga<R, T extends string>(action: ActionCreatorWithPayload<R, T>) {
    while (true) {
        const takenAction: Action = yield take(action); // take from channel, provided by saga context

        yield put(takenAction); // call custom dispatch() from saga's context
    }
}

export function* transportToChannelSaga(actions: ActionCreatorWithPayload<any>[]) {
    yield all(
        actions.map(action => fork(transferActionSaga, action))
    );
}
