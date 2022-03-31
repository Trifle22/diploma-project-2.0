import { pastConferencesApiCore } from '../apiCore';
import { PastConference } from '../../components/pages/PastConferencesPage/PastConferencesTable/types';

export const pastConferencesApi = {
    getAllConferences: () => pastConferencesApiCore.get<PastConference[]>('')
};
