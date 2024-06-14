 import React, { useEffect, useState } from 'react'
 import axios from "axios"
 import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
 const Orders = ({url}) => {
  const [orders,setOrders] = useState([]);
  
  const statusHandler = async(event,orderId) => {
    // console.log(event.target.value)
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
  }
  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list")
    if(response.data.success){
      console.log(response.data.data)
      setOrders(response.data.data)
    }
    else{
      toast.error(response.data.message)

    }
  }
  useEffect(() => {
    fetchAllOrders();
  },[])
   return (
     <div className=' p-3'>
      <h3 className=' text-xl font-bold ml-4'>Order Page</h3>
      <div className="">
        {
          orders.map((order,index) => {
            return (
              <div
                className="grid grid-cols-custom-layout2 items-start gap-7 border border-solid border-orange-700 p-5 my-7 text-sm text-[#505050]"
                key={index}
              >
                <img src={assets.parcel_icon} alt="" className="" />
                <div className="">
                  <p className=" font-semibold">
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + ", ";
                      }
                    })}
                  </p>
                  <p className="font-semibold mt-8 mb-1">
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <div className="">
                    <p className="mb-2">{order.address.street + ", "}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.country +
                        ", " +
                        order.address.zipcode}
                    </p>
                  </div>
                  <p className="">{order.address.phone}</p>
                </div>
                <p className="">Items: {order.items.length}</p>
                <p className="">${order.amount}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                  className=" bg-[#ffe8e4] border border-solid border- orange-700 w-[max(10vw,120px)] p-3 outline-none"
                >
                  <option value="Food processing">Food processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            );
          })
        }
      </div>
     </div>
   )
 }
 
 export default Orders