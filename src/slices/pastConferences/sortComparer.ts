import { PastConference } from '../../components/pages/PastConferencesPage/PastConferencesTable/types';

export const sortComparer = (a: PastConference, b: PastConference) => a.date - b.date;
