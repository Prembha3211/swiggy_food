import React, { useState } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import { ChevronDown } from "lucide-react";

const City = () => {
  const { brands, loading } = useFetchRestaurants();
  const { rescuisine } = useFetchRestaurants();
  const [visibleCities, setVisibleCities] = useState(6); // Show 6 cities initially

  const handleShowMore = () => {
    setVisibleCities((prev) => prev + 4); // Show 4 more cities
  };

  return (
    <div className="px-4 sm:px-10 md:px-32">
      <div className="mt-10">
        <h1 className="font-extrabold text-lg sm:text-2xl mb-4 text-center sm:text-left">
          Best Places to Eat Across Cities
        </h1>

        {loading && <p>Loading cities...</p>}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600 cursor-pointer">
          {brands.slice(0, visibleCities).map((city, index) => (
            <div
              key={city.id || index}
              className="border p-4 rounded-md flex items-center justify-center w-full sm:w-72 h-12"
            >
              <h2 className="text-sm font-bold text-center">{city.text}</h2>
            </div>
          ))}
        </div>

        {visibleCities < brands.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="border font-bold text-black rounded-md flex items-center justify-center w-full sm:w-72 h-12"
            >
              Show More <ChevronDown />
            </button>
          </div>
        )}
      </div>

      {/* Best Cuisines Section */}
      <div className="mt-10">
        <h1 className="font-extrabold text-lg sm:text-2xl mb-4 text-center sm:text-left">
          Best Cuisines Near Me
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600 cursor-pointer">
          {rescuisine.slice(0, visibleCities).map((rescity, index) => (
            <div
              key={rescity.id || index}
              className="border p-4 rounded-md flex items-center justify-center w-full sm:w-72 h-12"
            >
              <h2 className="text-sm font-bold text-center">{rescity.text}</h2>
            </div>
          ))}
        </div>

        {visibleCities < rescuisine.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="border font-bold text-black rounded-md flex items-center justify-center w-full sm:w-72 h-12"
            >
              Show More <ChevronDown />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default City;
