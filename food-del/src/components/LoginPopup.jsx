import React, { useContext, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let endpoint =
      currState === "Login" ? "/api/user/login" : "/api/user/register";
    let newUrl = url + endpoint;

    try {
      const res = await axios.post(newUrl, data);

      if (res.data.success) {

        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setShowLogin(false);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("API call error:", error); // Log any errors
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="absolute z-10 grid w-full h-full bg-[#00000090]">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[23vw] text-[#808080] bg-white flex flex-col gap-6 hero py-6 px-8 rounded-lg text-sm"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <GiCancel
            className="flex text-center text-xl cursor-pointer w-[16px]"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="flex flex-col gap-5">
          {currState === "Login" ? null : (
            <input
              name="name"
              type="text"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
            />
          )}

          <input
            type="text"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
          />
        </div>

        {currState === "Sign Up" && (
          <div className="flex items-start gap-2 mt-[-15px]">
            <input type="checkbox" required className="mt-2" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

        <button
          type="submit"
          className="border-none p-2 rounded text-white bg-orange-600 text-base cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-orange-600 font-semibold cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-orange-600 font-semibold cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
