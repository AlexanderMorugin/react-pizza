import Options from '../../options'

import pizza_barbeque from '../../../assets/pizza_barbeque.webp'
import style from './card.module.scss'

const Card = () => {
  return (
    <div className={style.card}>
      <img className={style.card__image} src={pizza_barbeque} alt='Pizza' />
      <h5 className={style.card__title}>Пицца Барбекю</h5>
      <p className={style.card__subtitle}>Пицца Барбекю супер вкусная, необыкновенная и просто сказка</p>
      <Options />
      <div className={style.bottom}>
        <p className={style.bottom__prise}>595 p</p>
        <button className={style.bottom__button}>+ добавить</button>
      </div>
    </div>
  )
}

export default Card
