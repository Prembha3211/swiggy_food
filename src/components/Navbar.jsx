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
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

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
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-40 shadow-md w-full h-16 font-semibold text-gray-700">
        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <img src={logo2Img} alt="logo2" className="h-10 sm:h-11" />
        </div>

        {/* Center - Navigation (Hidden on mobile) */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            <li className="flex gap-2 hidden xl:flex">
              <FontAwesomeIcon icon={faBriefcase} className="mt-1" />
              Swiggy Corporate
            </li>
            <li className="flex gap-2">
              <FontAwesomeIcon icon={faSearch} className="mt-1" />
              Search
            </li>
            <li className="flex gap-2">
              <BadgePercent className="bg-white" />
              Offers
            </li>
            <li className="flex gap-2">
              <BadgeInfo />
              Help
            </li>
          </ul>
        </nav>

        {/* Right - Sign In & Cart */}
        <div className="flex items-center space-x-6">
          <button
            className="flex gap-2 cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faSignIn} className="mt-1" />
            Sign in
          </button>
          <Link to="/cart" className="flex gap-2">
            <FontAwesomeIcon icon={faShoppingCart} className="mt-1" />(
            {cartItems.length}) Cart
          </Link>
        </div>
      </div>

      {/* Login Sidebar */}
      {isSidebarOpen && <LoginForm onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
};

export default Navbar;
