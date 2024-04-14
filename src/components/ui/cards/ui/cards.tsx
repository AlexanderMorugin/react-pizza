import mock from '../../../../mock/mock.json';
import Card from '../../card';

import styles from './cards.module.scss';

const Cards = () => {
  return (
    <ul className={styles.cards}>
      {mock.map((item) => (
        <li>
          <Card
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price.small}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cards;