import React, { useContext } from 'react'
import { StoreContext } from "../context/StoreContext";

import { CartComponent } from '../components/CartComponent';
import EmptyCart from '../components/EmptyCart';
const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext);

  return (
    <div className="">
      {Object.keys(cartItems).length > 0 ? <CartComponent /> : <EmptyCart />}
    </div>
  );
}

export default Cart