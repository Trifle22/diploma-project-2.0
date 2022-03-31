import { PayloadAction } from '@reduxjs/toolkit';

export enum RequestStatus {
    Loading,
    Success,
    Fail
}

export interface RequestState {
    status: RequestStatus;
    error: string | undefined;
}

interface RequestStatusActionPayload {
    key: string;
}

export type RequestStatusAction = PayloadAction<RequestStatusActionPayload>;

interface FailedRequestActionPayload extends RequestStatusActionPayload {
    error: string;
}

export type FailedRequestAction = PayloadAction<FailedRequestActionPayload>;
