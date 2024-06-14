import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';

const MyOrders = () => {
    const [data,setData] =useState([]);
    const {url,token} = useContext(StoreContext)

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        console.log("data",response.data.data)

    }
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])
   
  return (
    <div className=' m-[50px] '>

        <h2 className="text-xl font-semibold ml-2">My Orders</h2>
        <div className="flex flex-col gap-[20px] mt-8">
            {
                data.map((order,index)=>{
                    return (
                      <div key={index} className="grid  grid-cols-custom-layout2 items-center gap-8 text-sm py-3 px-5 text-[#454545] border border-solid border-orange-600">
                        <img 
                        className="w-[50px]"src={assets.parcel_icon} alt="" />
                        <p>
                          {order.items.map((item, index) => {
                            if (index === order.items.length - 1) {
                              return item.name + " x " + item.quantity;
                            } else {
                              return item.name + " x " + item.quantity + ", ";
                            }
                          })}
                        </p>
                        <p>${order.amount}.00</p>
                        <p className="">Items: {order.items.length}</p>
                        <p>
                          <span className='text-orange-700'>&#x25cf;</span> <b className=' font-semibold text-[#454545]'>{order.status}</b>
                        </p>
                        <button 
                        onClick={fetchOrders}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-200">
                          Track Order
                        </button>
                      </div>
                    );
                })
            }
        </div>
    </div>

  )
}

export default MyOrders