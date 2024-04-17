import { Link } from 'react-router-dom';

import BasketButton from '../../basket-button';
import Logo from '../../logo';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.header__link}>
        <Logo />
      </Link>
      <Link to='cart' className={styles.header__link}>
        <BasketButton />
      </Link>
    </header>
  );
};

export default Header;
