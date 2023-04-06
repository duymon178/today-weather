import { useState } from 'react';
import { WeatherParams } from 'src/app/store/weather-result.slice';
import styles from './search-form.module.scss';

export interface SearchFormProps {
  onSubmit: (arg: WeatherParams) => void;
  loading: boolean;
}

export function SearchForm(props: SearchFormProps) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  function handleFormClear() {
    setCity('');
    setCountry('');
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSubmit({ city, country });
  }

  const disabled = city.length === 0 || country.length === 0 || props.loading;

  return (
    <form className={styles['search-form']} onSubmit={handleFormSubmit}>
      <div
        className={`${styles['search-form__item']} ${styles['form-control']}`}
      >
        <label htmlFor="city" className={styles['form-control__label']}>
          City:
        </label>
        <input
          id="city"
          type="text"
          placeholder="Enter city name"
          className={styles['form-control__input']}
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>

      <div
        className={`${styles['search-form__item']} ${styles['form-control']}`}
      >
        <label htmlFor="country" className={styles['form-control__label']}>
          Country:
        </label>
        <input
          id="country"
          type="text"
          placeholder="Enter country code"
          className={styles['form-control__input']}
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>

      <div
        className={`${styles['search-form__item']} ${styles['form-actions']}`}
      >
        <button
          type="submit"
          className={styles['form-actions__button']}
          disabled={disabled}
        >
          Search
        </button>

        <button
          type="button"
          className={styles['form-actions__button']}
          onClick={handleFormClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
