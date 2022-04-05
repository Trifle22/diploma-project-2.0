import { User } from '../../../types/types';

export enum ConferenceType {
    WITHOUT_VIDEO = 'WITHOUT_VIDEO',
    WITH_VIDEO = 'WITH_VIDEO',
    ONLY_DEMONSTRATION = 'ONLY_DEMONSTRATION'
}

export const frindlyConferenceModeMap: Record<ConferenceType, string> = {
    WITHOUT_VIDEO: 'Без видео',
    WITH_VIDEO: 'С видео',
    ONLY_DEMONSTRATION: 'Только демонстрация'
};

export interface Conference {
    creator: User;
    participants: User[];
    date: number;
    duration: number;
    type: ConferenceType;
}
