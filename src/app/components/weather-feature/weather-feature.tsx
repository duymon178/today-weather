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
import { HistoryItem, WeatherResult } from 'src/app/models/model';
import SearchHistory from '../search-history/search-history';
import {
  historyAdd,
  historyRemove,
  selectHistory,
} from 'src/app/store/history.slice';
import { getCurrentTimeStr } from 'src/app/utils/helpers';

export function WeatherFeature() {
  const dispatch = useAppDispatch();
  const weather: WeatherResult | null = useAppSelector(selectWeather);
  const status = useAppSelector(selectWeatherLoading);
  const history = useAppSelector(selectHistory);

  function handleSearchFormSubmit(arg: WeatherParams) {
    dispatch(fetchWeather({ city: arg.city, country: arg.country }));
    dispatch(
      historyAdd({
        id: new Date().getTime(),
        city: arg.city,
        country: arg.country,
        time: getCurrentTimeStr(),
      })
    );
  }

  function handleHistorySearch(arg: HistoryItem) {
    dispatch(
      historyAdd({
        id: new Date().getTime(),
        city: arg.city,
        country: arg.country,
        time: getCurrentTimeStr(),
      })
    );
    dispatch(historyRemove(arg.id));
    dispatch(fetchWeather({ city: arg.city, country: arg.country }));
  }

  function handleHistoryDelete(id: number) {
    dispatch(historyRemove(id));
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

      <SearchHistory
        history={history}
        onSearch={handleHistorySearch}
        onDelete={handleHistoryDelete}
      />
    </>
  );
}

export default WeatherFeature;
