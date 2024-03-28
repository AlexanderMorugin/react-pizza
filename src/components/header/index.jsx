import { Logo } from '../logo';
import { ButtonBasket } from '../button-basket';
import style from './style.module.scss';

export const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <ButtonBasket />
    </div>
  );
};
