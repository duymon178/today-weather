import SearchForm from '../search-form/search-form';
import styles from './weather-feature.module.scss';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import {
  fetchWeather,
  selectWeather,
  selectWeatherLoading,
  WeatherParams,
} from 'src/app/store/weather-result.slice';
import WeatherResultUI from '../weather-result/weather-result';
import { WeatherResult } from 'src/app/models/model';
import SearchHistory from '../search-history/search-history';

/* eslint-disable-next-line */
export interface WeatherFeatureProps {}

export function WeatherFeature(props: WeatherFeatureProps) {
  const dispatch = useAppDispatch();
  const weather: WeatherResult | null = useAppSelector(selectWeather);
  const status = useAppSelector(selectWeatherLoading);

  function handleSearchFormSubmit(arg: WeatherParams) {
    dispatch(fetchWeather({ city: arg.city, country: arg.country }));
  }

  return (
    <>
      <SearchForm
        onSubmit={handleSearchFormSubmit}
        loading={status.loading === 'loading'}
      />

      <div className={styles['weather-result']}>
        <WeatherResultUI
          result={weather}
          loading={status.loading}
          error={status.error}
        />
      </div>

      <SearchHistory />
    </>
  );
}

export default WeatherFeature;
