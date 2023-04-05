import styles from './history-item.module.scss';

/* eslint-disable-next-line */
export interface HistoryItemProps {}

export function HistoryItem(props: HistoryItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HistoryItem!</h1>
    </div>
  );
}

export default HistoryItem;
