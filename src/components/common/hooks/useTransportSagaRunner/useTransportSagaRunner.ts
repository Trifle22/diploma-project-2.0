import { useEffect, Dispatch } from 'react';
import { runSaga } from 'redux-saga';
import { AnyAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
    transportChannel,
    transportToChannelSaga
} from './transportToChannelSaga';

export const useTransportSagaRunner = (
    dispatch: Dispatch<AnyAction>,
    actions: ActionCreatorWithPayload<any> | ActionCreatorWithPayload<any>[]
) => {
    useEffect(() => {
        const task = runSaga(
            {
                dispatch,
                channel: transportChannel
            },
            transportToChannelSaga as any,
            Array.isArray(actions) ? actions : [actions]
        );

        return () => {
            task.cancel();
        };
    }, [actions, dispatch]);
};
