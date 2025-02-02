import React from "react";
import { CDN_URL } from "../utils/constants";
import { FaStar, FaTag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const newItem = {
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100,
      image: CDN_URL + item.card.info.imageId,
    };

    dispatch(addItem(newItem));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 h-52  border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="">
              <span className="font-bold text-xl text-gray-700">
                {item.card.info.name}
              </span>
            </div>
            <div className="flex space-x-2 font-bold">
              <span className="text-gray-500">
                {" "}
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>{" "}
              <span>
                ₹
                {item.card.info.finalPrice
                  ? item.card.info.finalPrice / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <FaTag className="mt-2 h-3 text-green-600" />
            </div>
            <div className="flex space-x-1 text-[0.8rem] font-bold mt-3">
              <FaStar className="mt-1 text-green-600" />
              <span className="text-green-600">
                {item.card.info.ratings.aggregatedRating.rating}
              </span>{" "}
              <span className="text-gray-500">
                ({item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
            <p className="text-[1rem] mt-3 font-semibold cursor-pointer text-gray-500">
              {item.card.info.description
                ? item.card.info.description.substring(0, 120) + "... more"
                : item.card.info.description}
            </p>
          </div>
          <div className="w-48 h-[11rem] p-4 w-3/12">
            <div className="absolute ">
              <button
                className="w-28 p-2 bg-white text-green-500 font-extrabold shadow-lg mx-4 my-32 rounded-lg border border-gray-300"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordList;
