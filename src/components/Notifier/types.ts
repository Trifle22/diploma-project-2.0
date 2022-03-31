import { OptionsObject } from 'notistack';

export interface NotificationSnackBar {
    message: string;
    options?: OptionsObject;
}

export type NotificationActionPayload = NotificationSnackBar | NotificationSnackBar[];
