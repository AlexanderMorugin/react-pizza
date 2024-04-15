import mock from '../../../mock/mock.json';
import Card from '../../card';
// import SkeletonCard from '../../skeleton/skeleton-card';

import styles from './cards.module.scss';

const Cards = () => {
  return (
    
    <ul className={styles.cards}>
      {mock.map((item) => (
        <li key={item.id}>
          <Card {...item} />
          {/* <SkeletonCard /> */}
        </li>
      ))}
    </ul>
  );
};

export default Cards;
