import logo from '../../assets/icon_pizza_logo.svg';
import style from './style.module.scss';

export const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.image} src={logo} alt='Logo' />
      <div className={style.text}>
        <p className={style.title}>React Pizza</p>
        <p className={style.subtitle}>Самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};
