import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';

const ShipInfo = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems= [];
    food_list.map((item)=> {
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    console.log(orderItems)
  }
  return (
    <div className=""></div>
  );
}

export default ShipInfo