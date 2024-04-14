import styles from './sort-bar.module.scss';

const SortBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.buttons}>
        <button className={styles.button}>Все</button>
        <button className={styles.button}>Мясные</button>
        <button className={styles.button}>Вегетарианские</button>
        <button className={styles.button}>Гриль</button>
        <button className={styles.button}>Острые</button>
        <button className={styles.button}>Закрытые</button>
      </div>
      <div className={styles.sorting}></div>
    </div>
  );
};

export default SortBar;
