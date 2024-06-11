import React from 'react'
import ShipInfo from '../components/PlaceOrder/ShipInfo';
import Subtotal from '../components/PlaceOrder/Subtotal';
import Checkout from '../components/Checkout';

const OrderPlace = () => {
  return (
    <div className='flex items-start justify-evenly gap-4 mt-24'>
      <ShipInfo></ShipInfo>
      <Checkout></Checkout>
    </div>
  );
}

export default OrderPlace