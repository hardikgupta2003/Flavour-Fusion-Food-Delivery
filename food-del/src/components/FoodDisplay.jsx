import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className=" m-8 ">
      <h2 className=" font-bold text-4xl text-center text-orange-600">
        Top Dishes Near You
      </h2>
      <div className="mt-8 gap-8  grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-y-12">
        {food_list.map((item, index) => {
            if(category === "All" || item.category === category) {

          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
            
          );
        }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay