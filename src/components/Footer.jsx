import React from "react";
import { appstoreImg, logo2Img, playstoreImg } from "../utils";
import { ChevronDown, Instagram } from "lucide-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-7 py-6">
      <div className="container mx-auto px-14 mt-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:gap-x-8">
          <h1 className="font-extrabold text-2xl text-gray-700">
            For better experience, download the Swiggy app now
          </h1>

          <div className="flex gap-x-5">
            <img
              src={playstoreImg}
              alt="Google Play Store"
              className="w-48 h-16 object-contain"
            />
            <img
              src={appstoreImg}
              alt="Apple App Store"
              className="w-48 h-16 object-contain"
            />
          </div>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 px-12">
          <div>
            <h2 class="text-2xl font-bold text-orange-500 flex items-center">
              <img src={logo2Img} alt="Swiggy Logo" class="h-8 mr-2" />
              Swiggy
            </h2>
            <p class="text-sm mt-2">&copy; 2025 Swiggy Limited</p>
          </div>

          <div>
            <h3 class="font-bold">Company</h3>
            <ul class="mt-2 space-y-3 text-md font-semibold text-gray-500">
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

          <div>
            <h3 class="font-bold">Contact us</h3>
            <ul class="mt-2 space-y-3 text-md font-semibold text-gray-500">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>

            <h3 className="font-bold mt-20">Legal</h3>
            <ul class="mt-2 space-y-3 text-md font-semibold text-gray-500">
              <li>
                Terms &<br /> consdition
              </li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">Available in:</h3>
            <ul class="mt-2 space-y-3 text-md font-semibold text-gray-500">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <button class="mt-2 px-3 py-1 text-sm text-gray-500 border border-gray-400 rounded-lg flex">
              679 cities <ChevronDown className="ml-3" />
            </button>
          </div>

          <div>
            <h3 class="font-bold">Life at Swiggy</h3>
            <ul class="mt-2 space-y-3 text-md font-semibold text-gray-500">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
            <h3 class="font-bold mt-4">Social Links</h3>
            <div class="flex space-x-3 mt-2 text-xl text-gray-700 w-32">
              <BsLinkedin />
              <BsInstagram />
              <BsFacebook />
              <BsPinterest />
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
