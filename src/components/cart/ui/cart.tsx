import CartHead from '../../cart-head';

import styles from './cart.module.scss';
import CartItem from '../../cart-item';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <CartHead />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </section>
  );
};

export default Cart;
