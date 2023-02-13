import { CartContext } from "./CartContext";
import { useState, useReducer } from "react";
import CartItem from "../components/Cart/CartItem";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => item.id != action.id);

    return {
      items: updatedItems,
      totalAmount: state.totalAmount,
    };
  }
  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //const DUMMY_CART_ITEMS = [];
  //const [dummyCartItemsState, setDummyCartItemsState] =
  // useState(DUMMY_CART_ITEMS);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });

    //setDummyCartItemsState((prevState) => [item, ...prevState]);
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartItems = cartState.items.map((item) => (
    <CartItem
      onRemove={removeItemFromCart}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  const cartContextValue = {
    itemsCart: cartItems,
    dummy_cart_items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
