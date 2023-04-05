import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResult } from '../models/model';

export interface WeatherResultState {
  value: WeatherResult | null;
}

const initialState: WeatherResultState = {
  value: null,
};

export const weatherSlice = createSlice({
  name: 'weather result',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<WeatherResult>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = weatherSlice.actions;

export default weatherSlice.reducer;
