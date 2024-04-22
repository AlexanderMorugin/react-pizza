import { useDispatch } from 'react-redux';
import cart from '../../../assets/icons/icon_cart.svg';
import trash from '../../../assets/icons/icon_trash.svg';

import styles from './cart-head.module.scss';
import { clearItems } from '../../../redux/slices/cart-slice';

const CartHead = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <div className={styles.cartHead}>
      <div className={styles.cartHead__name}>
        <div className={styles.cartHead__box}>
          <img className={styles.cartHead__cartImage} src={cart} alt='Cart' />
        </div>

        <h1 className={styles.cartHead__title}>Корзина</h1>
      </div>
      <div onClick={handleClear} className={styles.cartHead__clean}>
        <img className={styles.cartHead__cleanImage} src={trash} alt='Trash' />
        <p className={styles.cartHead__cleanText}>Очистить корзину</p>
      </div>
    </div>
  );
};

export default CartHead;
