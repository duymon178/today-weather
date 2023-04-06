import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const WEATHER_FEATURE_KEY = 'weather';

/*
 * Update these interfaces according to your requirements.
 */
export interface WeatherEntity {
  id: number;
}

export interface WeatherState extends EntityState<WeatherEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const weatherAdapter = createEntityAdapter<WeatherEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchWeather())
 * }, [dispatch]);
 * ```
 */
export const fetchWeather = createAsyncThunk(
  'weather/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getWeathers()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialWeatherState: WeatherState = weatherAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const weatherSlice = createSlice({
  name: WEATHER_FEATURE_KEY,
  initialState: initialWeatherState,
  reducers: {
    add: weatherAdapter.addOne,
    remove: weatherAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state: WeatherState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchWeather.fulfilled,
        (state: WeatherState, action: PayloadAction<WeatherEntity[]>) => {
          weatherAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchWeather.rejected, (state: WeatherState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const weatherReducer = weatherSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(weatherActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const weatherActions = weatherSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllWeather);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = weatherAdapter.getSelectors();

export const getWeatherState = (rootState: unknown): WeatherState =>
  rootState[WEATHER_FEATURE_KEY];

export const selectAllWeather = createSelector(getWeatherState, selectAll);

export const selectWeatherEntities = createSelector(
  getWeatherState,
  selectEntities
);
