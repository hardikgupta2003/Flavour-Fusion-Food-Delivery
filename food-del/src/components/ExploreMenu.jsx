import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id='menu' className='flex flex-col gap-6 '>
        {/* explore menu */}
        <h1 className='flex justify-center font-bold text-5xl text-orange-600'>Explore Our Menu</h1>
        <p className=' text-center font-semibold text-2xl '>Choose from a diverse menu featuring a delectable array of dishes . our mission is to satisfy you cravings and elevate your dining experience</p>
        {/* explore menu list */}
        <div className="flex flex-wrap justify-between items-center gap-7 my-5  ">
            {
                menu_list.map((item,index)=>{
                    return (
                      <div
                        className=""
                        onClick={() => {
                          setCategory((prev) => {
                            const newCategory =
                              prev === item.menu_name ? "All" : item.menu_name;
                            console.log("Previous category:", prev);
                            console.log("New category:", newCategory);
                            return newCategory;
                          });
                        }}
                      >
                  
                          <img
                            src={item.menu_image}
                            alt=""
                            className={`w-[7.5rem] min-w-20 border rounded-full cursor-pointer ${
                              category === item.menu_name ? " border-solid border-orange-600 border-4 rounded-fullv" : "border border-solid border-gray-300 rounded-full"

                            }`}
                          />
                       
                        <h3 className=" mt-2 text-[#747474] cursor-pointer text-center">
                          {item.menu_name}
                        </h3>
                      </div>
                    );
                })
            }
            </div> 
            <hr className=' h-[2px] my-3 bg-[#e2e2e2] border-none ' />

    </div>
  )
}

export default ExploreMenu