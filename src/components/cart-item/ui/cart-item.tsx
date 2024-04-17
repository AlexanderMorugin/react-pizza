import styles from './cart-item.module.scss';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__mainBox}>
        <img
          className={styles.cartItem__image}
          src='https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif'
          alt='Pizza'
        />
        <div className={styles.cartItem__titleBox}>
          <div className={styles.cartItem__title}>
            <h5 className={styles.cartItem__name}>Пицца Двойной цыпленок</h5>
            <p className={styles.cartItem__description}>тонкое тесто, 26см</p>
          </div>
          <div className={styles.cartItem__countBox}>
            <div className={styles.cartItem__count}>
              <div className={styles.cartItem__math}>&minus;</div>
              <p className={styles.cartItem__number}>2</p>
              <div className={styles.cartItem__math}>&#43;</div>
            </div>
            <p className={styles.cartItem__price}>770 p</p>
          </div>
        </div>
      </div>
      <div className={styles.cartItem__delete}>&times;</div>
    </div>
  );
};

export default CartItem;
