import { FC } from 'react';

import Card from '../../card';
import { ICards } from '../model/types/types';
import SkeletonCard from '../../skeleton';

import styles from './cards.module.scss';

const Cards: FC<ICards> = ({ isLoading, pizza }) => {
  return (
    <ul className={styles.cards}>
      {isLoading
        ? [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)
        : pizza.map((item) => (
            <li key={item.id} className={styles.card}>
              <Card {...item} />
            </li>
          ))}
    </ul>
  );
};

export default Cards;
