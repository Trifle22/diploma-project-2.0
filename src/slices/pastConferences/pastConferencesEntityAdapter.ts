import { createEntityAdapter } from '@reduxjs/toolkit';
import { PastConference } from '../../components/pages/PastConferencesPage/PastConferencesTable/types';
import { sortComparer } from './sortComparer';

export const pastConferencesEntityAdapter = createEntityAdapter<PastConference>({ sortComparer });
