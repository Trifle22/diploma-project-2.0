import { useSnackbar, VariantType } from 'notistack';
import React, { useCallback } from 'react';
import { Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { useTransportSagaRunner } from '../common/hooks/useTransportSagaRunner';
import { NotificationActionPayload } from './types';
import { showNotification } from '../../sagas/notificationSagas/transportShowNotificationSaga';
import { ErrorNotification } from './ErrorNotification';
import { SuccessfullNotification } from './SuccessfullNotification';

interface SelectNotificationProps{
    key: number | string;
    message: string;
    notificationType: VariantType | undefined;
}

const selectNotification = ({ key, message, notificationType }: SelectNotificationProps) => {
    if (notificationType === 'error') return <ErrorNotification id={key} message={message} />;
    return <SuccessfullNotification id={key} message={message} />;
};

export const Notifier = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useCallback(
        ({ payload }: PayloadAction<NotificationActionPayload>) => {
            if ('length' in payload) {
                payload.forEach(n => {
                    const notificationType = n.options?.variant;
                    const { message } = n;
                    enqueueSnackbar(n.message, {
                        content: key => selectNotification({ key, message, notificationType }),
                        ...n.options
                    });
                });
            } else {
                const { message, options } = payload;
                const notificationType = payload.options?.variant;
                enqueueSnackbar(message, {
                    content: key => selectNotification({ key, message, notificationType }),
                    ...options
                });
            }
        },
        [enqueueSnackbar]
    ) as Dispatch;

    useTransportSagaRunner(dispatch, showNotification);

    return null;
};
