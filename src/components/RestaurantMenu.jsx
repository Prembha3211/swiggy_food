import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantAccordian from "./RestaurantAccordian";
import { FaStar } from "react-icons/fa";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    city,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) || [];

  return (
    <div className="">
      <div className="ml-96 mt-10">
        <h1 className="font-bold text-2xl">{name}</h1>
      </div>
      <div className="relative mt-7 ml-96 p-5 w-[47rem] h-[10rem] bg-white shadow-lg rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-t  from-gray-100 to-gray-300  bg-gradient-to-b rounded-2xl p-[15px]">
          <div className="bg-white h-full w-full rounded-2xl p-5">
            <div className="flex items-center space-x-2 text-black">
              <FaStar className="text-green-600" />
              <p className="text-md font-bold">{avgRating}</p>
              <p className="text-md font-bold text-gray-600">
                ({totalRatingsString})
              </p>
              <span className="text-md font-bold">• {costForTwoMessage}</span>
            </div>
            <p className="text-sm font-bold text-orange-600 mt-1">{cuisines}</p>

            <div className="flex items-center space-x-4 mt-1">
              <p className="text-sm text-gray-600 font-bold">
                Outlet - <span className="font-bold">{city}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <RestaurantAccordian
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
