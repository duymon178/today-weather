import { HistoryItem } from 'src/app/models/model';
import styles from './history-item.module.scss';
import { BsSearch, BsFillTrashFill } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface HistoryItemProps {
  item: HistoryItem;
  index: number;
  onSearch: (item: HistoryItem) => void;
  onDelete: (id: number) => void;
}

export function HistoryItemUI(props: HistoryItemProps) {
  return (
    <div className={styles['history-item']}>
      <div className={styles['history-item__left']}>
        {props.index}. {props.item.city}, {props.item.country}
      </div>
      <div className={styles['history-item__right']}>
        <div className={styles['history-time']}>{props.item.time}</div>
        <button
          className={styles['action-btn']}
          onClick={() => {
            props.onSearch(props.item);
          }}
        >
          <BsSearch />
        </button>
        <button
          className={styles['action-btn']}
          onClick={() => {
            props.onDelete(props.item.id);
          }}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

export default HistoryItemUI;
