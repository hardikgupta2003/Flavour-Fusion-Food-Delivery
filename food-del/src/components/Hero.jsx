import React from 'react'
import '../App.css'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className=' w-9/11  mx-auto my-[30px]  relative  '>
      <img src={assets.header_img} className='' />
      <div className="absolute \ top-8 text-white px-8 h-[34vw] hero">
        <h2 className=' font-bold text-8xl flex flex-col items-center w-[800px]'>Order Your Favourite food here</h2>
        <p className='font-semibold text-2xl  my-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          provident ab at quae rem aspernatur officia reprehenderit? Dolores
          illo, animi in eos sunt cupiditate ipsum enim quos vitae saepe
          accusamus.
        </p>
        <button className="border border-solid text-black bg-white rounded-3xl px-3 py-3 hover:bg-slate-400 ">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Hero