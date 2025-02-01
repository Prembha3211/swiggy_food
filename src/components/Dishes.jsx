import React, { useRef } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import DishesCard from "./DishesCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Dishes = () => {
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
    <div className="px-40 py-4 ml-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold ml-4">What's on your mind?</h2>
        <div className="flex space-x-4 mr-5">
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
        className="flex overflow-x-auto space-x-6 scrollbar-hide p-4"
      >
        {imageId.length > 0 ? (
          imageId.map((dish) => <DishesCard key={dish.id} resData={dish} />)
        ) : (
          <p className="ml-4">No dishes available</p>
        )}
      </div>
    </div>
  );
};

export default Dishes;
