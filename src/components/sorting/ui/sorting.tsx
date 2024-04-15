import { useState } from 'react';
import arrow from '../../../assets/icons/icon_arrow_sort.svg';

import styles from './sorting.module.scss';

const Sorting = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const popupMenu = ['популярности', 'цене', 'алфавиту'];
  const sortName = popupMenu[active];

  const handleClick = (index: number) => {
    setActive(index);
    setOpen(!open);
  };

  return (
    <div className={styles.sorting}>
      <img className={styles.sorting__image} src={arrow} />
      <span className={styles.sorting__text}>Сортировка&nbsp;по:</span>
      <span className={styles.sorting__link} onClick={() => setOpen(!open)}>
        {sortName}
      </span>

      {/* popup menu */}
      {open && (
        <ul className={styles.sorting__popup}>
          {popupMenu.map((item, index) => (
            <li
              key={index}
              className={
                active === index ? styles.sorting__active : styles.sorting__nav
              }
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
          {/* <li className={styles.sorting__nav}>популярности</li>
          <li className={styles.sorting__active}>цене</li>
          <li className={styles.sorting__nav}>алфавиту</li> */}
        </ul>
      )}
    </div>
  );
};

export default Sorting;
