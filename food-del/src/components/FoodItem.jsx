import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, price, name, description, image }) => {
    const {addToCart,cartItems,removeFromCart} = useContext(StoreContext)
    const [itemCount,setItemCount] = useState(0)
  return (
    <div className="w-full m-auto border rounded-2xl transition-all duration-200 hero">
      <div className="relative">
        <img src={image} alt="" className="w-full  rounded-2xl " />
        {!cartItems[id]
         ? (
          <div
            className="flex justify-end mr-2 mt2 transition-all duration-200 absolute rounded-xl bottom-3 right-2
            "
          >
            <img
              className="add flex "
              src={assets.add_icon_white}
              onClick={()=>addToCart(id)}
              alt=""
            />
          </div>
        ) : (
          <div className=" bg-white rounded-full flex absolute bottom-3 right-2 justify-end mt-2 mr-2">
            <div className=" p-1 flex gap-3  rounded-md items-center justify-end w-28">
              <img
                onClick={()=>removeFromCart(id)}
                className="transition-all duration-200"
                src={assets.remove_icon_red}
                alt=""
              />
              <p className="transition-all duration-200">{cartItems[id]}</p>
              <img
                onClick={()=>addToCart(id)}
                src={assets.add_icon_green}
                className="transition-all duration-200"
              />
            </div>
          </div>
        )}
      </div>
      <div className=" p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className=" font-medium text-xl">{name}</h3>
          <img src={assets.rating_starts} className=" w-[70px]" />
        </div>
        <p className="text-[#676767] text-sm">{description}</p>
        <p className=" font-medium text-2xl my-3 text-orange-600">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
