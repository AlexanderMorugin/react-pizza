import { FC } from 'react';

import { ICard } from '../model/types/types';
import Options from '../../options';

import styles from './card.module.scss';

const Card: FC<ICard> = ({ image, name, description, types, size, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt={name} />
      <h5 className={styles.card__name}>{name}</h5>
      <p className={styles.card__description}>{description}</p>
      <Options types={types} size={size} />
      <div className={styles.bottom}>
        <p className={styles.bottom__price}>{price[0]} p</p>
        <button className={styles.bottom__button}>
          <span className={styles.bottom__span}>+</span>&nbsp;Добавить
        </button>
      </div>
    </div>
  );
};

export default Card;
