import React from "react";
import styles from "../Cart/CartItem.module.css";
import { useState } from "react";
const CartItem = (props) => {
  const [lokalniAmount, setLokalniAmount] = useState(props.amount);

  const decrementHandler = () => {
    setLokalniAmount(Number(lokalniAmount) - 1);
    if (lokalniAmount <= 0) {
      props.onRemove(props.id);
    }
  };

  return (
    <div className={styles["cart-item-div"]}>
      <div className={styles["cart-about-div"]}>
        <div className={styles["cart-div-name-and-price"]}>
          <p className={styles["cart-item-name"]}>{props.name}</p>
          <p className={styles["cart-item-price"]}>{props.price}$</p>
        </div>
        <p className={styles["cart-item-amount"]}>x{lokalniAmount}</p>
      </div>

      <div className={styles["cart-add-div"]}>
        <button
          onClick={() => {
            setLokalniAmount(Number(lokalniAmount) + 1);
          }}
          className={styles["button++"]}
        >
          +
        </button>
        <button onClick={decrementHandler} className={styles["button--"]}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
