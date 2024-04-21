import { useSelector } from 'react-redux';
import basket from '../../../assets/icons/icon_shopping_bag_white.svg';

import styles from './basket-button.module.scss';

const BasketButton = () => {
  const { items, totalPrice } = useSelector(state => state.cart)

  return (
    <button className={styles.basket}>
      <p className={styles.text}>{totalPrice}&nbsp;р</p>
      <div className={styles.quantity}>
        <img className={styles.image} src={basket} alt='Basket' />
        <p className={styles.text}>{items ? items.length : '0'}</p>
      </div>
    </button>
  );
};

export default BasketButton;
