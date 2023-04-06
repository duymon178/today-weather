import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { HistoryItem } from '../models/model';

export const HISTORY_FEATURE_KEY = 'weather history';

export interface HistoryState {
  value: HistoryItem[];
}

const initialState: HistoryState = {
  value: [],
};

export const historySlice = createSlice({
  name: HISTORY_FEATURE_KEY,
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<HistoryItem>) => {
      state.value.unshift(payload);
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.value = state.value.filter((h) => h.id !== payload);
    },
  },
});

export const { add: historyAdd, remove: historyRemove } = historySlice.actions;

export default historySlice.reducer;

export const selectHistory = (state: RootState) => state.history.value;
