import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './weather-result.slice';
import historyReducer from './history.slice';

export const store = configureStore({
  reducer: {
    weatherResult: weatherReducer,
    history: historyReducer,
  },
});

// Extract the RootState type and the Dispatch type so that they can be referenced as needed.
// Inferring these types from the store itself means that they correctly update as you add more
// state slices or modify middleware settings.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
