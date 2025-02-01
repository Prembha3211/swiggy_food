import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import useFetchRestaurants from "../hooks/useFetchRestaurants";

const RestaurantList = () => {
  const { restaurants, loading, error } = useFetchRestaurants();

  return (
    <div className="items-center px-36">
      <h1 className="font-extrabold text-2xl ml-14">
        Restaurants with online food delivery in Mumbai
      </h1>

      {/* Filters */}
      <div className="ml-14 mt-5 space-x-3">
        <button className="border border-gray-300 rounded-full w-16 h-9 ">
          Filter
        </button>
        <button className="border border-gray-300 rounded-full w-24 h-9">
          Sort By{" "}
          <FontAwesomeIcon icon={faArrowDown} className="text-gray-500 mt-1" />
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {restaurants.length > 0
          ? restaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          : !loading && (
              <p className="text-center text-gray-500">
                No restaurants available
              </p>
            )}
      </div>
    </div>
  );
};

export default RestaurantList;
