import { LoadStatus, WeatherResult } from 'src/app/models/model';
import styles from './weather-result.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { getTimeStrFromTimestamp } from 'src/app/utils/helpers';

export interface WeatherResultProps {
  result: WeatherResult | null;
  loading: LoadStatus;
  error: string;
}

export function WeatherResultUI(props: WeatherResultProps) {
  function weatherResult(loadStatus: LoadStatus): JSX.Element | null {
    switch (loadStatus) {
      case 'not loaded':
        return notLoaded;
      case 'loading':
        return loading;
      case 'loaded':
        return loaded;
      case 'error':
        return error;
    }
  }
  const loaded = props.result && (
    <div className={styles['weather']}>
      <div className={styles['weather__location']}>
        {props.result.city}, {props.result.country}
      </div>
      <div className={styles['weather__group']}>{props.result.group}</div>
      <div className={styles['weather__description']}>
        <div className={styles['weather__description__label']}>
          Description:
        </div>
        <div className={styles['weather__description__content']}>
          {props.result.description}
        </div>
        <div className={styles['weather__description__label']}>
          Temperature:
        </div>
        <div className={styles['weather__description__content']}>
          {props.result.temp}&#8451;
        </div>
        <div className={styles['weather__description__label']}>Humidity:</div>
        <div className={styles['weather__description__content']}>
          {props.result.humidity}%
        </div>
        <div className={styles['weather__description__label']}>Time:</div>
        <div className={styles['weather__description__content']}>
          {getTimeStrFromTimestamp(props.result.time)}
        </div>
      </div>
    </div>
  );

  const loading = (
    <div className={styles['loading']}>
      <AiOutlineLoading3Quarters />
      <div>Loading...</div>
    </div>
  );

  const notLoaded = (
    <div className={styles['not-loaded']}>
      Please start with a city name and an ISO 3166 country code
    </div>
  );

  const error = <div className={styles['error']}>{props.error}</div>;

  return (
    <div className={styles['weather-container']}>
      {weatherResult(props.loading)}
    </div>
  );
}

export default WeatherResultUI;
