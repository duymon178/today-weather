import styles from './search-history.module.scss';

/* eslint-disable-next-line */
export interface SearchHistoryProps {}

export function SearchHistory(props: SearchHistoryProps) {
  return (
    <>
      <h1 className={styles['heading']}>Search History</h1>
    </>
  );
}

export default SearchHistory;
