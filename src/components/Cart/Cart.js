import React from 'react'
import Modal from '../UI/Modal'
import styles from '../Cart/Cart.module.css'
import Meals from '../Meals/Meals'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartContextProvider } from '../../contexts/CartContext'
const Cart = (props) => {

  const ctxCart = useContext(CartContext)
  
  return (

    <CartContextProvider>
    <Modal>
        {ctxCart.itemsCart}
<div className={styles['total-div']}>
    <h2>TOTAL AMOUNT</h2>
    <h4 className={styles['total-price']} >18$</h4>
</div>
<div className={styles['button-div']}>
   <button onClick={props.clickHandler}>Close</button> 
   <button>Order</button> 
   </div>
    </Modal>

    </CartContextProvider>
  )
}

export default Cart