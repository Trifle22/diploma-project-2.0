import { useReducer } from 'react';
import { Slice } from '@reduxjs/toolkit';
import { useTransportSagaRunner } from './useTransportSagaRunner';

export const useLocalSlice = <T>(slice: Slice<T>, initialState: T) => {
    const [state, dispatchLocal] = useReducer(slice.reducer, initialState);

    useTransportSagaRunner(dispatchLocal, Object.values(slice.actions));

    return state;
};
