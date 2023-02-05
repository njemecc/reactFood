import React from 'react'
import { useState } from 'react'
import CartItem from '../components/Cart/CartItem'


export const CartContext = React.createContext({
  itemsCart:[],
  dummy_cart_items:[],
  addItemToCart: () => {}
})



export const CartContextProvider = (props) => {
 
  const DUMMY_CART_ITEMS = [
    {name:"Palacinka",price:14,amount:2},
    {name:"Pljeskavica",price:29,amount:1},
    {name:"Pasulj",price:17,amount:9}
  ]
   
const [dummyCartItemsState,setDummyCartItemsState] = useState(DUMMY_CART_ITEMS)

  const cartItems = dummyCartItemsState.map(item => <CartItem name={item.name} price={item.price} amount={item.amount} />)
  
  const addItemToCart = (item) => {
      setDummyCartItemsState(prevState => 
        [
             item,
          ...prevState
        ]
      )
  }


  return (
    <CartContext.Provider value={{itemsCart:cartItems,dummy_cart_items:dummyCartItemsState,addItemToCart:addItemToCart}}>
      {props.children}
    </CartContext.Provider>
    
  )
}

