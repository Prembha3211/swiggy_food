import React from "react";
import RestaurantList from "./RestaurantList";
import Dishes from "./Dishes";
import City from "./city";

const Fooddelivery = () => {
  return (
    <div>
      <Dishes />
      <RestaurantList />
      <City />
    </div>
  );
};

export default Fooddelivery;
