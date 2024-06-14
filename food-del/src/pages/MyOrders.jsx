import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

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
    <div className=''>


    </div>

  )
}

export default MyOrders