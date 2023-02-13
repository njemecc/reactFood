import React from "react";
import styles from "./Header.module.css";
import CartIcon from "../../assets/CartIcon";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = (props) => {
  const ctxCart = useContext(CartContext);

  let numberOfAmount = ctxCart.dummy_cart_items.reduce((acc, trenutni) => {
    return Number(acc) + Number(trenutni.amount);
  }, 0);

  const [buttonIsAnimated, setButtonIsAnimated] = useState(false);

  const buttonClasses = `${styles["header-cart-button"]} ${
    buttonIsAnimated ? styles["bump"] : ""
  }`;

  useEffect(() => {
    if (ctxCart.itemsCart.length === 0) {
      return;
    }

    setButtonIsAnimated(true);

    const timer = setTimeout(() => {
      setButtonIsAnimated(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [ctxCart.itemsCart]);

  return (
    <React.Fragment>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-naslov-div"]}>
          <h2>ReactMeals</h2>
        </div>
        <div onClick={props.clickHandler} className={buttonClasses}>
          <div>
            <CartIcon />
          </div>
          <p className={styles["header-cart-p"]}>Your Cart</p>
          <p className={styles["header-cart-counter"]}>{numberOfAmount}</p>
        </div>
      </div>
      <div className={styles["header-img-div"]}>
        <img src="https://static.citylifestyle.com/articles/convenient-and-healthy-meals-in-the-neighborhood/Neighborhood%20Fit_137-1600.jpg?v=1"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
