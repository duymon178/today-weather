import styles from './search-form.module.scss';

/* eslint-disable-next-line */
export interface SearchFormProps {}

export function SearchForm(props: SearchFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchForm!</h1>
    </div>
  );
}

export default SearchForm;
