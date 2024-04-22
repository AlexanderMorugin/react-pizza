import { useDispatch } from 'react-redux';
import styles from './cart-item.module.scss';
import { addItems, minusItems, removeItems } from '../../../redux/slices/cart-slice';

const CartItem = ({ id, image, name, count, totalPrice }) => {
  const dispatch = useDispatch();

  const plusItem = () => {
    dispatch(
      addItems({
        id
      })
    );
  };

  const minusItem = () => {
    dispatch(minusItems(id));
  };

  const removeItem = () => {
    dispatch(removeItems(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__mainBox}>
        <img className={styles.cartItem__image} src={image} alt={name} />
        <div className={styles.cartItem__titleBox}>
          <div className={styles.cartItem__title}>
            <h5 className={styles.cartItem__name}>{name}</h5>
            <p className={styles.cartItem__description}>тонкое тесто, 26см</p>
          </div>
          <div className={styles.cartItem__countBox}>
            <div className={styles.cartItem__count}>
              <div onClick={minusItem} className={styles.cartItem__math}>
                &minus;
              </div>
              <p className={styles.cartItem__number}>{count}</p>
              <div onClick={plusItem} className={styles.cartItem__math}>
                &#43;
              </div>
            </div>
            <p className={styles.cartItem__price}>{totalPrice} p</p>
          </div>
        </div>
      </div>
      <div onClick={removeItem} className={styles.cartItem__delete}>&times;</div>
    </div>
  );
};

export default CartItem;
