import { User } from './types';
import { ConferenceTypeType } from '../components/common/ConferenceType';

export interface Conference {
    creator: User;
    date: number;
    duration: number;
    type: ConferenceTypeType;
    participants: User[];
}
