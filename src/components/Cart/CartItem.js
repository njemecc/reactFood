import React from 'react'
import styles from '../Cart/CartItem.module.css'
const CartItem = (props) => {
  return (
    <div className={styles['cart-item-div']}>
        <div className={styles['cart-about-div']}>
            <div className={styles['cart-div-name-and-price']}>
            <p className={styles['cart-item-name']}>{props.name}</p>
            <p className={styles['cart-item-price']}>{props.price}$</p>
            </div>
            <p className={styles['cart-item-amount']}>x {props.amount}</p>
        </div>

        <div className={styles['cart-add-div']}>
        <button className={styles['button++']}>+</button>
        <button className={styles['button--']}>-</button>
        </div>
    </div>
  )
}

export default CartItem