import React from 'react'
import styles from './Meal.module.css'
import { CartContext } from '../../contexts/CartContext'
//hooks
import { useContext } from 'react'

const Meal = (props) => {

  const ctxCart = useContext(CartContext)

  console.log(ctxCart)
  

  return (
    <div key={props.id} className={styles['meal-div']}>
        <div  className={styles['meal-about-div']}>
            <p className={styles['meal-name']}>{props.name}</p>
            <p className={styles['meal-desc']}>{props.desc}</p>
            <p className={styles['meal-price']}>{props.price}$</p>

        </div>
        <div  className={styles['meal-add-div']}>
            <div>
            <p className={styles['meal-amount']}>Amount</p>
            <input min="1" max="5" type="number" />
            </div>
            <button type='Button'>+ Add</button>
         
        </div>
    </div>
  )
}

export default Meal