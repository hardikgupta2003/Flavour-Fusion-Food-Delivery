import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { MdDelete } from "react-icons/md";
import Checkout from './Checkout';
export const CartComponent = () => {
      const { cartItems, food_list, removeFromCart, url } = useContext(StoreContext);
  return (
    <div>
      <div className=" mx-auto mt-24 h-full w-10/12">
        <div className="">
          <div className="grid grid-cols-custom-layout \ text-center text-gray-600 text-xs">
            <p className="">Items</p>
            <p className="">Title</p>
            <p className="">Price</p>
            <p className="">Quantity</p>
            <p className="">Total</p>
            <p className="">Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="">
                  <div className="grid grid-cols-custom-layout text-center items-center text-sm  my-2 text-black ">
                    <img
                      src={url + "/images/" + item.image}
                      className="w-[150px] rounded "
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${cartItems[item._id] * item.price}</p>
                    <p className="flex justify-center items-center text-center">
                      <MdDelete
                        onClick={() => removeFromCart(item._id)}
                        className=" flex justify-center text-red-600 text-xl"
                      />
                    </p>
                  </div>
                  <hr className="h-[4px] " />
                </div>
              );
            }
          })}
        </div>
        <div className="">
            <Checkout/>
        </div>
      </div>
    </div>
  );
}
