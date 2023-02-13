import Header from "./components/Layout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContext } from "./contexts/CartContext";
import { CartContextProvider } from "./contexts/CartProvider";
//hooks
import { useState, useContext } from "react";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const ctxCart = useContext(CartContext);

  const [totalAmount, setTotalAmount] = useState(ctxCart.totalAmount);

  const showCart = () => {
    setCartVisible(true);

    setTotalAmount(Number(ctxCart.totalAmount) + 1);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <CartContextProvider>
      <Header clickHandler={showCart} />
      <Meals />
      {cartVisible ? (
        <Cart totalAmount={totalAmount} clickHandler={hideCart} />
      ) : null}
    </CartContextProvider>
  );
};

export default App;
