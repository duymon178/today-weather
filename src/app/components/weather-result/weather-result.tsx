import styles from './weather-result.module.scss';

/* eslint-disable-next-line */
export interface WeatherResultProps {}

export function WeatherResult(props: WeatherResultProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WeatherResult!</h1>
    </div>
  );
}

export default WeatherResult;
