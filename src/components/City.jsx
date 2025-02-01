import React, { useState } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import { ChevronDown } from "lucide-react";

const City = () => {
  const { brands, loading } = useFetchRestaurants(); // Correct destructuring
  const { rescuisine } = useFetchRestaurants();
  const [visibleCities, setVisibleCities] = useState(11); // Start with 11 cities visible

  // Function to show more cities
  const handleShowMore = () => {
    setVisibleCities(visibleCities + 4); // Show 4 more cities
  };

  // Handle the last row with 3 cities
  const lastRowCities = brands.slice(visibleCities - 3, visibleCities);

  return (
    <div className="px-32">
      <div className="mt-20 ml-5">
        <h1 className="font-extrabold text-2xl mb-4">
          Best Places to Eat Across Cities
        </h1>

        {loading && <p>Loading cities...</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600 cursor-pointer">
          {brands.slice(0, visibleCities).map((city, index) => (
            <div
              key={city.id || index}
              className="border p-4 rounded-md flex items-center justify-center w-72 h-12"
            >
              <h2 className="text-sm font-bold text-center">{city.text}</h2>
            </div>
          ))}

          {visibleCities < brands.length && (
            <button
              onClick={handleShowMore}
              className="border font-bold text-black rounded-md flex items-center justify-center w-72 h-12"
            >
              Show More <ChevronDown />
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 ml-5">
        <div>
          <h1 className="font-extrabold text-2xl mb-4">
            Best Cuisines Near Me
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600 cursor-pointer">
          {rescuisine.slice(0, visibleCities).map((rescity, index) => (
            <div
              key={rescity.id || index}
              className="border p-4 rounded-md flex items-center justify-center w-72 h-12"
            >
              <h2 className="text-sm font-bold text-center">{rescity.text}</h2>
            </div>
          ))}

          {visibleCities < rescuisine.length && (
            <button
              onClick={handleShowMore}
              className="  text-black border font-bold rounded-md flex items-center justify-center w-72 h-12"
            >
              Show More
              <ChevronDown />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default City;
