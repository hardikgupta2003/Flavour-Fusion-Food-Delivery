import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
const List = () => {
  const url = "http://localhost:3000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error Occured");
    }
  };
  const removeFood = async (foodId) => {
   const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId,
    });
    await fetchList();
 
  if(response.data.success){
    toast.success(response.data.message);
  }
  else{
    toast.error("Error occured")
  }
 };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="w-full  flex flex-col gap-3">
      <h2 className="text-center my-2 text-orange-500 text-3xl ">
        All Food List
      </h2>
      <div className="">
        <div className="grid grid-cols-custom-layout items-center gap-3 py-3 px-4 border border-solid border-[#cacaca] text-xl bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((food, index) => {
          return (
            <div
              className="grid grid-cols-custom-layout items-center gap-3 py-3 px-4 border border-solid border-[#cacaca] text-sm"
              key={index}
            >
              <img
                src={`${url}/images/` + food.image}
                className=" w-15 rounded-lg"
              />
              <p className=" text-lg">{food.name}</p>
              <p className=" text-lg">{food.category}</p>
              <p className="text-lg font-bold">${food.price}</p>
              <div onClick={() => removeFood(food._id)} className="">
                <MdDelete className=" flex justify-center cursor-pointer text-red-600 text-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
