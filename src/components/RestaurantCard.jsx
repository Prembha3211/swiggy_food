import React from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { addItem } from "../utils/cartSlice";

const RestaurantCard = ({ resData }) => {
  const dispatch = useDispatch();

  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    slaString,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  const handleClick = () => {
    dispatch(
      addItem({
        id,
        areaName,
        name,
        cloudinaryImageId,
        restaurantName: name,
        restaurantareaName: areaName,
      })
    ); // Add restaurant to cart
  };

  return (
    <div
      onClick={handleClick} // Dispatch image to Redux on click
      className="w-[250px] rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="relative">
        <img
          className="rounded-lg h-40 w-72 object-cover shadow-2xl"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg"></div>
        {aggregatedDiscountInfoV3 && (
          <div className="absolute flex bottom-0 text-white px-2 py-1 rounded-md text-xl font-extrabold shadow-md space-x-1">
            <span>{aggregatedDiscountInfoV3.header}</span>
            <p>{aggregatedDiscountInfoV3.subHeader}</p>
          </div>
        )}
      </div>

      <div className="px-2">
        <h3 className="font-bold mt-2 text-lg">{name}</h3>
        <div className="flex justify-between text-sm">
          <h4>
            <FontAwesomeIcon icon={faStar} className="text-green-400 mr-1" />
            {avgRating} •
          </h4>
          <h4>{slaString}</h4>
        </div>
        <h4 className="font-semibold overflow-hidden whitespace-nowrap text-gray-500">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-500 font-semibold">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
