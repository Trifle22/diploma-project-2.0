import { RootState } from '../../store';
import { pastConferencesEntityAdapter } from './pastConferencesEntityAdapter';

const entityAdapterSelectors = pastConferencesEntityAdapter
    .getSelectors((state: RootState) => state.pastConferences);

export const selectPastConferences = entityAdapterSelectors.selectAll;
export const selectPastConferenceById = entityAdapterSelectors.selectById;
