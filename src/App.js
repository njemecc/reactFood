import Header from './components/Layout/Header'
import React from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './contexts/CartContext'

//hooks
import { useState } from 'react'
const App = () => {

  const [cartVisible,setCartVisible] = useState(false)
  
  const showCart = () =>{
    setCartVisible(true);
  }

  const hideCart = () => {
    setCartVisible(false)
  }


  return (
    <CartContextProvider>
    <Header clickHandler={showCart}/>
    <Meals/>
   { cartVisible ? <Cart clickHandler={hideCart} /> : null }
   </CartContextProvider>
  ) 

}

export default App