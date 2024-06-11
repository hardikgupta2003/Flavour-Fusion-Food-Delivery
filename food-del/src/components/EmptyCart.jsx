// src/EmptyCart.js
import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white mx-auto p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button
          onClick={goToHome}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
