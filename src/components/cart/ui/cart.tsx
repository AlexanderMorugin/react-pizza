import { Link } from 'react-router-dom';
import arrow from '../../../assets/icons/icon_arrow_left.svg';

import CartHead from '../../cart-head';
import CartItem from '../../cart-item';

import styles from './cart.module.scss';
import { useSelector } from 'react-redux';


const Cart = () => {

  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((amount, item) => amount + item.count, 0)


  console.log(items)

  return (
    <section className={styles.cart}>
      <CartHead />
      <ul className={styles.cart__list}>
        {items.map((item) => (
          <li key={item.id}>
            <CartItem {...item} totalPrice={totalPrice} />
          </li>
        ))}
      </ul>

      <div className={styles.cart__total}>
        <div className={styles.cart__box}>
          <span>Всего пицц:</span>
          <span className={styles.cart__quantity}>{totalCount} шт</span>
        </div>
        <div className={styles.cart__box}>
          <span>Сумма заказа:</span>
          <span className={styles.cart__amount}>{totalPrice} руб</span>
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
