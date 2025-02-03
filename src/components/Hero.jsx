import React from "react";
import {
  bannerhomeImg,
  dineoutImg,
  fooddeliveryImg,
  genieImg,
  instamartImg,
  sushiImg,
  veggiesImg,
} from "../utils";
import { MapPin, Search } from "lucide-react";
import Heronav from "./Heronav";
import { Link } from "react-router-dom";
import Herodish from "./Herodish";
import City from "./city";

const Hero = () => {
  return (
    <div>
      <Heronav />
      <div className="bg-orange-600  flex items-center justify-between ">
        {/* Veggies Image */}
        <div className=" hidden flex-shrink-0 sm:block">
          <img
            src={veggiesImg}
            alt="veggies"
            className="h-[400px] w-auto mb-20 "
          />
        </div>

        {/* Center Content */}
        <div className="text-center flex flex-col items-center justify-center gap-y-11">
          <h1 className="text-xl lg:text-5xl font-bold text-white mt-20">
            Order food and groceries Discover <br /> best restaurants, Swiggy
            it!
          </h1>
          <div className="flex space-x-4 items-center">
            {/* Location Input with Icon */}
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPin className="text-gray-500 w-6 h-6 text-orange-500" />
              </span>
              <input
                type="text"
                placeholder="Enter your location"
                className="pl-11 w-72 rounded-2xl border border-gray-300 h-14"
              />
            </div>

            {/* Search Input */}
            <div className="relative w-[23rem] lg:w-[30rem]">
              <span className="absolute inset-y-0 right-0 flex items-center pl-3">
                <Search className="text-gray-500 w-5 h-5 mr-5" />
              </span>
              <input
                type="text"
                placeholder="Search for restaurant, item or more"
                className="w-full px-4 rounded-2xl h-14 border border-gray-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center cursor-pointer lg:gap-4">
            <Link to="/fooddelivery">
              <img
                src={fooddeliveryImg}
                className="w-full h-full object-cover"
              />
            </Link>
            <Link to="/instamart">
              <img src={instamartImg} className="w-full h-full object-cover" />
            </Link>
            <Link to="/dineout">
              <img src={dineoutImg} className="w-full h-full object-cover" />
            </Link>
            <Link to="/genie">
              <img src={genieImg} className="w-full h-full object-cover" />
            </Link>
          </div>
        </div>

        {/* Sushi Image */}
        <div className=" hidden sm:block flex-shrink-0 ">
          <img src={sushiImg} alt="sushi" className="h-[400px] w-auto mb-20" />
        </div>
      </div>

      <Herodish />

      <div>
        <div>
          <div>
            <img src={bannerhomeImg} alt="banner" className="h-28" />
          </div>
        </div>
      </div>

      <City />
    </div>
  );
};

export default Hero;
