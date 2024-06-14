import React, { useContext, useState, useEffect } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderPlace = () => {
  const { getTotalCartAmount, token, food_list, cartItems} =
  useContext(StoreContext);
  const url = "http://localhost:3000";
  const [promo, setPromo] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountMessage, setDiscountMessage] = useState("");

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
  const navigate = useNavigate();
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

   try {
     // Prepare order items
     let orderItems = food_list
       .filter((item) => cartItems[item._id] > 0)
       .map((item) => ({ ...item, quantity: cartItems[item._id] }));

     // Order data
     let orderData = {
       address: data,
       items: orderItems,
       amount: totalAmount + 2,
     };

     // Log the URL to verify
     console.log(`${url}/api/order/place`);

     // Post the order data
     let response = await axios.post(`${url}/api/order/place`,orderData,{headers:{token}});

     console.log(response);

     if (response.status === 200 && response.data.success) {
       const { session_url } = response.data;
       window.location.replace(session_url);
     } else {
       alert("Error occurred: " + response.data.message || "Unknown error");
     }
   } catch (error) {
     console.error("Order placement failed", error);
     alert("Error occurred while placing order.");
   }
 };
 useEffect(()=>{
  if(!token){
    navigate('/login');
  }
  else if(getTotalCartAmount()===0){
    navigate('/');
  }
 },[token])



  useEffect(() => {
    // Initialize the total amount with the subtotal
    setTotalAmount(getTotalCartAmount());
  }, [getTotalCartAmount]);

  const handlePromoSubmit = () => {
    if (promo === "hardik5" && !discountApplied) {
      setTotalAmount((prevTotal) => prevTotal - 5);
      setDiscountApplied(true);
      setDiscountMessage(
        "Promo code applied successfully! $5 discount applied."
      );
    } else if (discountApplied) {
      setDiscountMessage("Promo code has already been applied.");
    } else {
      setDiscountMessage("Invalid promo code.");
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmit={placeOrder}
        className=" flex items-start justify-evenly gap-[200px] mt-24"
      >
        <div className="left w-full max-w-[max(30%,500px)]">
          <p className="text-3xl font-semibold mb-12">Delivery Information</p>
          <div className="flex gap-2">
            <input required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              className=" mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="FirstName"
            />
            <input required
              type="text"
              onChange={onChangeHandler}
              name="lastName"
              value={data.lastName}
              className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="Last Name"
            />
          </div>
          <input required
            type="email"
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Email Address"
          />
          <input required
            type="text"
            onChange={onChangeHandler}
            name="street"
            value={data.street}
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Street"
          />
          <div className="flex gap-2">
            <input required
              name="city"
              onChange={onChangeHandler}
              type="text"
              value={data.city}
              className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="City"
            />
            <input required
              type="text"
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="State"
            />
          </div>
          <div className="flex gap-2">
            <input required
              name="zipcode"
              value={data.zipcode}
              onChange={onChangeHandler}
              type="text"
              className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="Zip code"
            />
            <input required
              type="text"
              name="country"
              value={data.country}
              onChange={onChangeHandler}
              className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
              placeholder="Country"
            />
          </div>
          <input required
            type="phone"
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Phone No."
          />
        </div>

        {/* //checkout */}
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
                <p className="">${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-[#555]">
                <p className="">Platform Fee</p>
                <p className="">${getTotalCartAmount() === 0 ? 0 : 1}</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-[#555]">
                <b className="">Total</b>
                <b className="">${totalAmount === 0 ? 0 : totalAmount + 3}</b>
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
                  type="submit"
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
      </form>
    </div>
  );
};

export default OrderPlace;
