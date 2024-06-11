import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';

const Subtotal = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <div className="my-[80px] flex justify-between gap-[12vw]">
        <div className="flex-[1] flex flex-col gap-5">
          <h2>Checkout</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-[#555]">
              <p className="">Delivery Fee</p>
              <p className="">${2}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-[#555]">
              <p className="">Platform Fee</p>
              <p className="">${1}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-[#555]">
              <b className="">Total</b>
              <b className="">${totalAmount + 3}</b>
            </div>
            <hr className="my-3" />
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-200 flex justify-center items-center gap-2"
          >
            Proceed to Checkout <MdShoppingCartCheckout />
          </button>
        </div>
        <div className="flex-[1] mt-20">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="mt-2 flex gap-3">
              <input
                type="text"
                placeholder="Promo Code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="border-solid border outline-none"
              />
              <button
                onClick={handlePromoSubmit}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-200"
              >
                Submit
              </button>
            </div>
            {discountMessage && (
              <p className="text-green-500 mt-2">{discountMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal