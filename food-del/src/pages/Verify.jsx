import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { Spinner } from "../components/Spinner";
const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query parameters from the URL
  const searchParams = new URLSearchParams(location.search);
  // const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(success,orderId);

  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    const response = await axios.post(url+"/api/order/verify", {
      success,
      orderId,
    });
    console.log("response",response.data)
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className=" w-[100vw] h-[100vh] ">
      <div className=" flex items-center justify-center">
        <Spinner></Spinner>
      </div>
    </div>
  );
};

export default Verify;
