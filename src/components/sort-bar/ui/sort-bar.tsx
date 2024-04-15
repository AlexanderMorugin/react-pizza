import { useState } from 'react';

import Sorting from '../../sorting';

import styles from './sort-bar.module.scss';

const SortBar = () => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className={styles.bar}>
      <ul className={styles.bar__buttons}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={
              active === index ? styles.bar__active : styles.bar__button
            }
          >
            {category}
          </li>
        ))}
      </ul>
      <Sorting />
    </div>
  );
};

export default SortBar;
