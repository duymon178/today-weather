// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <>
      <nav className={styles['navigation']}>
        <div className={styles['container']}>
          <div className={styles['page-title']}>Today's weather</div>
        </div>
      </nav>
      <main className={styles['main-content']}>
        <div className={styles['container']}>Main</div>
      </main>
    </>
  );
}

export default App;
