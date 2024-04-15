import { FC, useState } from 'react';
import styles from './options.module.scss';
import { IOptions } from '../model/types/types';

const Options: FC<IOptions> = ({ types, size }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const handleClickType = (index: number) => {
    setActiveType(index);
  };

  const handleClickSize = (index: number) => {
    setActiveSize(index);
  };

  return (
    <div className={styles.options}>
      <ul className={styles.options__items}>
        {types.map((type, index) => (
          <li
            key={index}
            onClick={() => handleClickType(index)}
            className={
              activeType === index ? styles.options__active : styles.options__item
            }
          >
            {type}
          </li>
        ))}
      </ul>
      <ul className={styles.options__items}>
        {size.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClickSize(index)}
            className={
              activeSize === index ? styles.options__active : styles.options__item
            }
          >
            {item} см
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
