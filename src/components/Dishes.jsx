import React, { useRef } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import DishesCard from "./DishesCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Herodish = () => {
  const { imageId } = useFetchRestaurants();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 sm:px-10 md:px-40 py-4">
      <div className="flex items-center justify-between px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-extrabold">
          What's on your mind?
        </h2>
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide p-4"
      >
        {/* Mobile: 2-row horizontal scrolling */}
        <div className="sm:hidden grid grid-rows-2 grid-flow-col gap-4 w-max">
          {imageId.length > 0 ? (
            imageId.map((dish) => (
              <Link to="/fooddelivery" key={dish.id} className="inline-block">
                <DishesCard resData={dish} />
              </Link>
            ))
          ) : (
            <p className="ml-4">No dishes available</p>
          )}
        </div>

        {/* Large Screens: 2-row structured grid */}
        <div className="hidden sm:grid grid-rows-2 grid-flow-col lg:gap-4">
          {imageId.length > 0 ? (
            imageId.map((dish) => (
              <Link to="/fooddelivery" key={dish.id} className="inline-block">
                <DishesCard resData={dish} />
              </Link>
            ))
          ) : (
            <p className="ml-4">No dishes available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herodish;
