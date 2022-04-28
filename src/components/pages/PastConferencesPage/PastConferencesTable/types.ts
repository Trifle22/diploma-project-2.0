import { User } from '../../../../types/types';

export interface PastConference {
    id: number;
    date: number;
    duration: number;
    participants: number;
    participantsList: User[];
}
