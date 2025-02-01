import React from "react";
import { logoImg } from "../utils";

const Heronav = () => {
  return (
    <div className="bg-orange-600 flex justify-between items-center px-36">
      <div>
        <img src={logoImg} alt="logo" className=" h-11 mt-8" />
      </div>
      <nav className="flex items-center space-x-7 font-bold text-white mt-8 ">
        <ul className="flex items-center space-x-10">
          <li>Swiggy Corporate</li>
          <li>Partner with us</li>
        </ul>
        <button className="border border-gray-200 w-40 h-14 rounded-2xl flex items-center justify-between px-5">
          <span>Get the App</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-up-right w-5 h-5 font-bold mt-1"
          >
            <path d="M13 5H19V11" />
            <path d="M19 5L5 19" />
          </svg>
        </button>

        <button className=" w-32 h-14 rounded-2xl bg-black">Sign in</button>
      </nav>
    </div>
  );
};

export default Heronav;
