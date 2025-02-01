import React from "react";
import { CDN_URL } from "../utils/constants";

const DishesCard = ({ resData }) => {
  const { imageId, text } = resData;

  return (
    <div className="w-36 h-40 flex-shrink-0">
      <img
        src={CDN_URL + imageId}
        alt={text}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="mt-2 text-center font-semibold text-base">{text}</h3>
    </div>
  );
};

export default DishesCard;
