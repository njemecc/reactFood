import React from 'react'
import styles from './Header.module.css'
import CartIcon from '../../assets/CartIcon'

const Header = (props) => {
  return (
    <React.Fragment>
    <div className={styles['header-wrapper']}>
        <div className={styles['header-naslov-div']}>
       <h2>ReactMeals</h2> 
        </div>
        <div onClick={props.clickHandler} className={styles['header-cart-button']}>
        <div>
        <CartIcon />
        </div>
        <p className={styles['header-cart-p']}>Your Cart</p>
        <p className={styles['header-cart-counter']}>3</p>
        </div>
    </div>
    <div className={styles['header-img-div']}>
    <img src="https://static.citylifestyle.com/articles/convenient-and-healthy-meals-in-the-neighborhood/Neighborhood%20Fit_137-1600.jpg?v=1"></img>
    </div>
    </React.Fragment>
  )
}

export default Header