import React from "react";
import { appstoreImg, logo2Img, playstoreImg } from "../utils";
import { ChevronDown } from "lucide-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 sm:px-10 md:px-14">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4 sm:px-12">
          {/* Logo and Copyright */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500 flex items-center">
              <img
                src={logo2Img}
                alt="Swiggy Logo"
                className="h-6 sm:h-8 mr-2"
              />
              Swiggy
            </h2>
            <p className="text-sm mt-2">&copy; 2025 Swiggy Limited</p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm font-semibold text-gray-500">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>

          {/* Contact and Legal Section */}
          <div>
            <h3 className="font-bold">Contact us</h3>
            <ul className="mt-2 space-y-2 text-sm font-semibold text-gray-500">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>

            <h3 className="font-bold mt-6">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm font-semibold text-gray-500">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          {/* Available Locations */}
          <div>
            <h3 className="font-bold">Available in:</h3>
            <ul className="mt-2 space-y-2 text-sm font-semibold text-gray-500">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <button className="mt-2 px-3 py-1 text-sm text-gray-500 border border-gray-400 rounded-lg flex items-center justify-center">
              679 cities <ChevronDown className="ml-2" />
            </button>
          </div>

          {/* Social Media */}
          <div className="sm:text-left space-y-4">
            <h3 className="font-bold">Life at Swiggy</h3>
            <ul className="mt-2 space-y-2 text-sm font-semibold text-gray-500">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <h3 className="font-bold mt-4">Social Links</h3>
            <div className="flex justify-center sm:justify-start space-x-3 text-xl text-gray-700">
              <BsLinkedin />
              <BsInstagram />
              <BsFacebook />
              <BsPinterest />
              <BsTwitter />
            </div>
          </div>
        </div>

        {/* App Download Section at the Bottom on Mobile */}
        <div className="flex flex-col-reverse sm:flex-row items-center text-center space-y-4 sm:space-y-0 sm:justify-between mt-10">
          <h1 className="font-extrabold text-md w-72 lg:text-lg sm:text-2xl text-gray-700">
            For better experience, download the Swiggy app now
          </h1>

          <div className="flex gap-x-3 sm:gap-x-5">
            <img
              src={playstoreImg}
              alt="Google Play Store"
              className="w-36 sm:w-48 h-12 sm:h-16 object-contain"
            />
            <img
              src={appstoreImg}
              alt="Apple App Store"
              className="w-36 sm:w-48 h-12 sm:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
