import style from './style.module.scss';

export const SortBar = () => {
  return (
    <div className={style.bar}>
      <div className={style.buttons}>
        <button className={style.button}>Все</button>
        <button className={style.button}>Мясные</button>
        <button className={style.button}>Вегетарианские</button>
        <button className={style.button}>Гриль</button>
        <button className={style.button}>Острые</button>
        <button className={style.button}>Закрытые</button>
      </div>
      <div className={style.sorting}></div>
    </div>
  );
};
