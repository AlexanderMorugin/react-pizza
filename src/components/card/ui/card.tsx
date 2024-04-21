import { FC } from 'react';

import { ICard } from '../model/types/types';
import Options from '../../options';

import styles from './card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../../redux/slices/cart-slice';

const Card: FC<ICard> = ({
  id,
  image,
  name,
  description,
  types,
  size,
  price,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0

  console.log(addedCount)

  const handleClick = () => {
    const item = {
      id,
      image,
      name,
      description,
      types,
      size,
      price,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt={name} />
      <h5 className={styles.card__name}>{name}</h5>
      <p className={styles.card__description}>{description}</p>
      <Options types={types} size={size} />
      <div className={styles.bottom}>
        <p className={styles.bottom__price}>{price[0]} p</p>
        <button onClick={handleClick} className={styles.bottom__button}>
          <span className={styles.bottom__span}>+</span>&nbsp;Добавить
          {addedCount > 0 && <span className={styles.bottom__count}>{addedCount}</span>}
        </button>
      </div>
    </div>
  );
};

export default Card;
