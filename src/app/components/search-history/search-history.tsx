import styles from './search-history.module.scss';

/* eslint-disable-next-line */
export interface SearchHistoryProps {}

export function SearchHistory(props: SearchHistoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchHistory!</h1>
    </div>
  );
}

export default SearchHistory;
