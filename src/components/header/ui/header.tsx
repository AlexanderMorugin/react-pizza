import BasketButton from '../../basket-button';
import Logo from '../../logo';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <BasketButton />
    </div>
  );
};

export default Header;
