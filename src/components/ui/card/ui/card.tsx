import { FC } from 'react';

import { ICard } from '../model/types/types';
import Options from '../../options';

import styles from './card.module.scss';

const Card: FC<ICard> = ({ image, name, description, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt='Pizza' />
      <h5 className={styles.card__title}>{name}</h5>
      <p className={styles.card__subtitle}>{description}</p>
      <Options />
      <div className={styles.bottom}>
        <p className={styles.bottom__prise}>{price} p</p>
        <button className={styles.bottom__button}>+ добавить</button>
      </div>
    </div>
  );
};

export default Card;
