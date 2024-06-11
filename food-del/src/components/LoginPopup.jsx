import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { GiCancel } from "react-icons/gi";

const LoginPopup = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className=" absolute z-10 grid w-full h-full bg-[#00000090]">
      <form
        action="submit"
        className=" place-self-center w-[23vw] text-[#808080] bg-white flex flex-col gap-6 hero py-6 px-8 rounded-lg text-sm"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className='text-2xl font-bold'>{currState}</h2>
          <GiCancel className="flex text-center text-xl cursor-pointer w-[16px]" onClick=
          {() => setShowLogin(false)}/>
          {/* <img src={assets.cross_icon} className="flex text-center" 
          onClick={() => setShowLogin(false) }/> */}
        </div>

        <div className="flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <>
              {" "}
              <input type="text" placeholder="Your Name" className=' outline-none border border-solid border-[#c9c9c9] p-2 rounded'/>
            </>
          )}

          <input type="text" placeholder="Your Email" className=' outline-none border border-solid border-[#c9c9c9] p-2 rounded'/>
          <input type="password" placeholder="Password" className=' outline-none border border-solid border-[#c9c9c9] p-2 rounded'/>
        </div>
        {/* condition */}
        <div className="flex items-start gap-2 mt-[-15px]">
          {currState==="Sign Up" ?
          <div className="flex gap-2 items-start">
            <input type="checkbox" required className='mt-2'/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          : <></>}
        </div>
        <button className=' border-none p-2 rounded text-white bg-orange-600 text-base cursor-pointer'>{currState === "Sign Up" ? "create account" : "Login "}</button>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span className=' text-orange-600 font-semibold' onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className=' text-orange-600 font-semibold' onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup