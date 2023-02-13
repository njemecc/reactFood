import React from "react";

export const CartContext = React.createContext({
  itemsCart: [],
  totalAmount: 0,
  dummy_cart_items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});
