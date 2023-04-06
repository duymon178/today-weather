import { RootState } from './store';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  Geocoding,
  LoadStatus,
  WeatherResult,
  WeatherSearchResult,
} from '../models/model';
import { fetchGeocodingData, fetchWeatherData } from '../utils/weatherAPI';

export const WEATHER_RESULT_FEATURE_KEY = 'weather result';

export interface WeatherResultState {
  loading: LoadStatus;
  error: string;
  value: WeatherResult | null;
}

const initialState: WeatherResultState = {
  loading: 'not loaded',
  error: '',
  value: null,
};

export interface WeatherParams {
  city: string;
  country: string;
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (params: WeatherParams, thunkAPI) => {
    const geocodingRes = await fetchGeocodingData(params.city, params.country);
    const geoData = (await geocodingRes.json()) as Geocoding[];

    if (geoData.length === 0) {
      return null;
    }

    const weatherRes = await fetchWeatherData(geoData[0].lat, geoData[0].lon);
    const weatherData = (await weatherRes.json()) as WeatherSearchResult;

    if (!weatherData) {
      return null;
    }

    return {
      city: geoData[0].name,
      country: geoData[0].country,
      lat: geoData[0].lat,
      lon: geoData[0].lon,
      time: weatherData.current.dt,
      temp: weatherData.current.temp,
      humidity: weatherData.current.humidity,
      clouds: weatherData.current.clouds,
      group: weatherData.current.weather[0].main,
      description: weatherData.current.weather[0].description,
      icon: weatherData.current.weather[0].icon,
    } as WeatherResult;
  }
);

export const weatherResultSlice = createSlice({
  name: WEATHER_RESULT_FEATURE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state: WeatherResultState) => {
        state.loading = 'loading';
      })
      .addCase(
        fetchWeather.fulfilled,
        (
          state: WeatherResultState,
          action: PayloadAction<WeatherResult | null>
        ) => {
          if (action.payload) {
            state.value = action.payload;
            state.loading = 'loaded';
          } else {
            state.value = null;
            state.loading = 'error';
            state.error = 'Not found';
          }
        }
      )
      .addCase(fetchWeather.rejected, (state: WeatherResultState, action) => {
        state.loading = 'error';
        state.error = action.error.message || '';
      });
  },
});

export const weatherActions = weatherResultSlice.actions;

export const weatherReducer = weatherResultSlice.reducer;

/* Selectors: */
export const selectWeather = (state: RootState) => state.weatherResult.value;
export const selectWeatherLoading = (state: RootState) => {
  return {
    loading: state.weatherResult.loading,
    error: state.weatherResult.error,
  };
};
