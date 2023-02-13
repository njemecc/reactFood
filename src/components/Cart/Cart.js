import React from "react";
import Modal from "../UI/Modal";
import styles from "../Cart/Cart.module.css";
import Meals from "../Meals/Meals";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartContextProvider } from "../../contexts/CartProvider";
const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const totalAmount = ctxCart.dummy_cart_items.reduce((acc, cur) => {
    return acc + cur.price * cur.amount;
  }, 0);

  return (
    <Modal>
      {ctxCart.itemsCart}
      <div className={styles["total-div"]}>
        <h2>TOTAL AMOUNT</h2>
        <h4 className={styles["total-price"]}>{totalAmount}</h4>
      </div>
      <div className={styles["button-div"]}>
        <button onClick={props.clickHandler}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
