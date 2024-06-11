import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { LuShoppingBasket } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"
import { LuDot } from "react-icons/lu";
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Menu");
    const {cartItems}=useContext(StoreContext)

   
  return (
    <div className="flex h-7 justify-between w-10/12 transition-all duration-200 navbar items-center">
      <Link  to="/">
        <div className="flex items-center gap-2">
          <img
            src={assets.LogoFF}
            alt=""
            className="hover:scale-105 transition-all duration-200 w-[max(10%,50px)]"
          />
          <p className=" text-3xl">Flavour-Fusion</p>
        </div>
      </Link>

      <ul className="flex w-5/12 justify-around text-lg text-gray-800">
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
          }}
          className={menu == "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => {
            setMenu("Menu");
          }}
          className={menu == "Menu " ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#contact"
          onClick={() => {
            setMenu("Contact");
          }}
          className={menu == "Contact" ? "active" : ""}
        >
          Contact
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("Mobile-App");
          }}
          className={menu == "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
      </ul>
      <div className="relative flex justify-between items-center w-1/12">
        <FaSearch className=" text-2xl" />
        <div className=" w-4 h-9">
          <Link to="/cart">
            <LuShoppingBasket className="text-3xl" />
          </Link>
        </div>
        {Object.keys(cartItems).length > 0 ? (
          <LuDot className="absolute bottom-2 left-[90px]  text-5xl text-orange-500 " />
        ) : (
          <></>
        )}
      </div>

      <div className="flex items-center">
        <button
          className=" bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition duration-200 "
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar