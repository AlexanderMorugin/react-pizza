import { Link } from 'react-router-dom';
import arrow from '../../../assets/icons/icon_arrow_left.svg';

import CartHead from '../../cart-head';
import CartItem from '../../cart-item';

import styles from './cart.module.scss';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <CartHead />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles.cart__total}>
        <div className={styles.cart__box}>
          <span>Всего пицц:</span>
          <span className={styles.cart__quantity}>3 шт</span>
        </div>
        <div className={styles.cart__box}>
          <span>Сумма заказа:</span>
          <span className={styles.cart__amount}>990 руб</span>
        </div>
      </div>
      <div className={styles.cart__buttons}>
        <Link to='/'>
          <button className={styles.cart__back}>
            <img
              className={styles.cart__arrow}
              src={arrow}
              alt='Вернуться назад'
            />
            Назад
          </button>
        </Link>
        <button className={styles.cart__pay}>Оплатить</button>
      </div>
    </section>
  );
};

export default Cart;
