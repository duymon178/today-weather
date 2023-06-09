export interface Geocoding {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeatherSearchResult {
  lat: number;
  lon: number;
  current: CurrentWeather;
}

export interface CurrentWeather {
  dt: number;
  temp: number;
  humidity: number;
  clouds: number;
  weather: WeatherDetail[];
}

export interface WeatherDetail {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherResult {
  city: string;
  country: string;
  lat: number;
  lon: number;
  time: number;
  temp: number;
  humidity: number;
  clouds: number;
  group: string;
  description: string;
  icon: string;
}

export type LoadStatus = 'not loaded' | 'loading' | 'loaded' | 'error';

export interface HistoryItem {
  city: string;
  country: string;
  id: number;
  time: string;
}
