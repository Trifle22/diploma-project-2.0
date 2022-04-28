import { RootState } from '../../store';

export const selectAudioSetting = (state: RootState) => state.individualConferenceSettings.audio;
export const selectVideoSetting = (state: RootState) => state.individualConferenceSettings.video;
