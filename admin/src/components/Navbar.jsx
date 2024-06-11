import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between items-center p-2 ">
        <div className="flex items-center gap-2">
            <img
          src={assets.LogoFF}
          alt=""
          className="hover:scale-105 transition-all duration-200 w-[max(10%,50px)]"
        />
        <p className=' text-3xl'>Flavour-Fusion</p>
        </div>
        
        <img
          src={assets.profile_icon}
          alt=""
          className="hover:scale-105 transition-all duration-200 w-10"
        />
      </div>
    </div>
  );
}

export default Navbar