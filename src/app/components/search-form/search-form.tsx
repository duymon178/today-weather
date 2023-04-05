import { useState } from 'react';
import { useAppDispatch } from 'src/app/store/hooks';
import { fetchWeather } from 'src/app/store/weather-result.slice';
import styles from './search-form.module.scss';

/* eslint-disable-next-line */
export interface SearchFormProps {}

export function SearchForm(props: SearchFormProps) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useAppDispatch();

  function handleFormClear() {
    setCity('');
    setCountry('');
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(fetchWeather({ city, country }));
  }

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
          className={styles['form-control__input']}
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>

      <div
        className={`${styles['search-form__item']} ${styles['form-actions']}`}
      >
        <button type="submit" className={styles['form-actions__button']}>
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
