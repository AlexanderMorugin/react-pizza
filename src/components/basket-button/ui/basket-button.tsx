import basket from '../../../assets/icons/icon_shopping_bag_white.svg';

import styles from './basket-button.module.scss';

const BasketButton = () => {
  return (
    <button className={styles.basket}>
      <p className={styles.text}>500&nbsp;р</p>
      <div className={styles.quantity}>
        <img className={styles.image} src={basket} alt='Basket' />
        <p className={styles.text}>0</p>
      </div>
    </button>
  );
};

export default BasketButton;
