import logo from '../../../assets/icons/icon_pizza_logo.svg';

import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.image} src={logo} alt='Logo' />
      <div className={styles.text}>
        <p className={styles.title}>React Pizza</p>
        <p className={styles.subtitle}>Самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};

export default Logo;
