import basket from '../../assets/icon_shopping_bag_white.svg'
import style from './style.module.scss'

export const ButtonBasket = () => {
  return (
    <button className={style.basket}>
      <p className={style.text}>500&nbsp;р</p>
      <div className={style.quantity}>
        <img className={style.image} src={basket} alt='Basket' />
        <p className={style.text}>0</p>
      </div>
    </button>
  )
}