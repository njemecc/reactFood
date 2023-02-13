import React, { useState } from "react";
import styles from "./Meal.module.css";
import { CartContext } from "../../contexts/CartContext";
//hooks
import { useContext, useRef } from "react";

const Meal = (props) => {
  const ctxCart = useContext(CartContext);
  const { addItemToCart } = ctxCart;
  const { sumTotal } = ctxCart;

  const amountRef = useRef();

  const [amountRefValueState, setAmountRefValueState] = useState(1);

  const updateRefHandler = (e) => {
    setAmountRefValueState(e.target.value);
  };

  const plusClickHandler = () => {
    addItemToCart({
      name: props.name,
      price: props.price,
      amount: amountRefValueState,
      id: Math.round(Math.random() * 1000),
    });
  };

  return (
    <div key={props.id} className={styles["meal-div"]}>
      <div className={styles["meal-about-div"]}>
        <p className={styles["meal-name"]}>{props.name}</p>
        <p className={styles["meal-desc"]}>{props.desc}</p>
        <p className={styles["meal-price"]}>{props.price}$</p>
      </div>
      <div className={styles["meal-add-div"]}>
        <div>
          <p className={styles["meal-amount"]}>Amount</p>
          <input
            onChange={updateRefHandler}
            ref={amountRef}
            min="1"
            max="5"
            type="number"
          />
        </div>
        <button
          onClick={plusClickHandler}
          className={styles["btn-add"]}
          type="Button"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default Meal;
