import React, { useState } from 'react'
import { IoBagCheck } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { version } from 'react-dom';
const Sidebar = () => {
    const [clicked, setClicked] = useState(false);
   
  return (
    <div className="w-[18%] min-h-[100vh] border-solid border-[1.5px] border-[#a9a9a9] border-t-0">
      <div className=" p-5 w-full  gap-5 pr-0 flex flex-col">
        <NavLink
          onClick={() => setClicked("add")}
          to="/add"
          className={
            clicked === "add"
              ? "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  bg-orange-400"
              : "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  "
          }
        >
          <IoAddCircleSharp />
          <p className="">Add Items</p>
        </NavLink>
        <NavLink
          onClick={() => setClicked("Add Items")}
          to="/list"
          className={
            clicked == "Add Items"
              ? "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  bg-orange-400"
              : "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  "
          }
        >
          <FaList />
          <p className="">List Items</p>
        </NavLink>
        <NavLink
          onClick={() => setClicked("orders")}
          to="/orders"
          className={
            clicked==="orders"
              ? "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  bg-orange-400"
              : "flex gap-3 items-center font-bold text-xl  hover:scale-105 transition-all duration-200 border border-r-0 border-solid border-[#a9a9a9] py-2 px-3 cursor-pointer rounded sidebar-option  "
          }
        >
          <IoBagCheck />
          <p className="">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar