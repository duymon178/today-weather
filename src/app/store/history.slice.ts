import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResult } from '../models/model';

export interface HistoryState {
  value: WeatherResult[];
}

const initialState: HistoryState = {
  value: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<WeatherResult>) => {
      state.value.push(payload);
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.value.splice(payload, 1);
    },
    update: (
      state,
      { payload }: PayloadAction<{ index: number; value: string }>
    ) => {
      state.value[payload.index].time = payload.value;
    },
  },
});

export const { add, remove, update } = historySlice.actions;

export default historySlice.reducer;
