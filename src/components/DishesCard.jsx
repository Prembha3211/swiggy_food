import React from "react";
import { CDN_URL } from "../utils/constants";

const DishesCard = ({ resData }) => {
  const { imageId, text } = resData;

  return (
    <div className="w-20 h-28 sm:w-28 sm:h-32 md:w-36 md:h-40 flex-shrink-0">
      <img
        src={CDN_URL + imageId}
        alt={text}
        className="w-full h-32 sm:h-24 md:h-40 object-cover rounded-t-lg"
      />
      <h3 className="mt-2 text-center font-semibold text-sm sm:text-xs md:text-base text-gray-700">
        {text}
      </h3>
    </div>
  );
};

export default DishesCard;
