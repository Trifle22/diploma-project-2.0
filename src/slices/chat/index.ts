import { chatSlice } from './chatSlice';

export const chatReducer = chatSlice.reducer;
export const chatActions = chatSlice.actions;
export * from './chatSelectors';
