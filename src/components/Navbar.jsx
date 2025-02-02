import React, { useState } from "react";
import { logo2Img } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSearch,
  faShoppingCart,
  faSignIn,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { BadgeInfo, BadgePercent } from "lucide-react";
import LoginForm from "./LoginForm"; // Import LoginForm
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items); // Subscribing to the store using selector

  const locations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];

  const handleLocationChange = (e) => {
    const input = e.target.value;
    setLocation(input);

    if (input.length > 0) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setFilteredLocations([]);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between px-40 shadow-md w-full h-20 items-center font-semibold text-gray-700">
        {/* Logo & Location Search */}
        <div className="flex gap-6 items-center">
          <img src={logo2Img} alt="logo2" className="h-11" />

          {/* Location Search */}
          <div className="relative">
            <div className="flex items-center border bottom-3 rounded-lg p-2 ml-10 bg-white">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-blue-400 mr-2"
              />

              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Search location..."
                className="outline-none w-52"
              />
            </div>

            {/* Dropdown List */}
            {filteredLocations.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 mt-1 w-48 rounded-lg shadow-lg">
                {filteredLocations.map((loc, index) => (
                  <li
                    key={index}
                    onClick={() => selectLocation(loc)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Navbar Menu */}
        <nav>
          <ul className="flex justify-between space-x-10">
            <li className="flex gap-3">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-gray-800 mt-1"
              />
              Swiggy Corporate
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-gray-800 mt-1" />
              Search
            </li>
            <li className="flex gap-3">
              <BadgePercent className="bg-white" />
              Offers
            </li>
            <li className="flex gap-3">
              <BadgeInfo />
              Help
            </li>
            <li
              className="flex gap-3 cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FontAwesomeIcon icon={faSignIn} className="text-gray-800 mt-1" />
              Sign in
            </li>
            <Link to="/cart">
              <li className="flex gap-3">
                <FontAwesomeIcon icon={faShoppingCart} className="mt-1" />(
                {cartItems.length}) Cart
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Login Sidebar */}
      {isSidebarOpen && <LoginForm onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
};

export default Navbar;
