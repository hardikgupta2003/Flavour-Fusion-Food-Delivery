import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className=" w-full mx-auto mt-24" id='app-download'>
      <p className=" font-bold text-5xl text-center">
        For Better Experiences Download <br /> Tomato App{" "}
      </p>
      <div className="flex gap-20 justify-center items-center h-[200px] hero ">
        <img
          src={assets.app_store}
          className="hover:scale-110 transition-all duration-200 cursor-pointer"
        />
        <img
          src={assets.play_store}
          className="hover:scale-110 transition-all duration-200 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default AppDownload