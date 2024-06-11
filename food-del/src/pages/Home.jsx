import React, { useState } from "react";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import Footer from "../components/Footer";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("Salad");
  return (
    <div className=" mx-auto w-10/12">
      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
      
    </div>
  );
};

export default Home;
