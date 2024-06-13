import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Verify = () => {
      const location = useLocation();
      const navigate = useNavigate();

      // Extract query parameters from the URL
      const searchParams = new URLSearchParams(location.search);
      const success = searchParams.get("success") === "true";
      const orderId = searchParams.get("orderId");
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg text-center">
          {success ? (
            <FaCheckCircle className="w-24 h-24 mb-4 mx-auto" />
          ) : (
            <ImCross className="w-24 h-24 mb-4 mx-auto" />
          )}

          <h2 className="text-3xl font-bold mb-4">
            {success ? "Thank You for Your Payment!" : "Payment Failed"}
          </h2>
          <p className="text-lg mb-6">
            {success
              ? `Your order with ID ${orderId} has been successfully processed.`
              : `Unfortunately, there was an issue with your payment for order ID ${orderId}.`}
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verify