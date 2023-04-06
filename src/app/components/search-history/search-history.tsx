import { HistoryItem } from 'src/app/models/model';
import HistoryItemUI from '../history-item/history-item';
import styles from './search-history.module.scss';

/* eslint-disable-next-line */
export interface SearchHistoryProps {
  history: HistoryItem[];
  onSearch: (item: HistoryItem) => void;
  onDelete: (id: number) => void;
}

export function SearchHistory(props: SearchHistoryProps) {
  const empty = <div className={styles['no-record']}>No record</div>;

  const historyList = (
    <div className={styles['history-list']}>
      {props.history.map((e, index) => (
        <HistoryItemUI
          key={e.id}
          item={e}
          index={index + 1}
          onSearch={props.onSearch}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );

  return (
    <>
      <h1 className={styles['heading']}>Search History</h1>
      <div className={styles['content']}>
        {props.history.length === 0 ? empty : historyList}
      </div>
    </>
  );
}

export default SearchHistory;
