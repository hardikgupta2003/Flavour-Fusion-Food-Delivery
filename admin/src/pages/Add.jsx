import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
const Add = () => {
  const url = "http://localhost:3000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //  useEffect(() => {
  //     console.log(data)
  //  },[data])

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }
  };

  return (
    <div
      className="w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base  
    "
    >
      <form
        action=""
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5"
      >
        <div className="flex-col relative">
          <p>Upload Image</p>
          <label htmlFor="image">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className=" w-[200px] m-3 outline rounded z-0"
              />
            ) : (
              <FaCloudUploadAlt className=" text-[120px] text-orange-200" />
            )}
            {image ? (
              <RxCrossCircled
                onClick={() => setImage(false)}
                className=" absolute left-[211px] bottom-[163px] z-10 text-lg text-black"
              />
            ) : (
              <></>
            )}
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col gap-3 w-[max(40%,280px)] ">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type Here"
            className="p-[10px] outline-none border-2 border-solid rounded border-orange-400"
          />
        </div>

        <div className="flex flex-col gap-3 w-[max(40%,280px)]">
          <p className="">Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            className="p-[10px] outline-none border-2 border-solid rounded border-orange-400"
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="flex gap-14 items-center ">
          <div className="flex flex-col gap-3 ">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="outline-none border-2 border-solid rounded border-orange-400 max-w-[120px] p-3"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 ">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="Type Price here"
              className="outline-none border-2 border-solid rounded border-orange-400 max-w-[120px] p-3"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition duration-200 my-4"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
