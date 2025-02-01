import React from "react";
import { loginimgImg } from "../utils";

const LoginForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-end ">
      <div className="w-[35rem] h-full bg-white shadow-lg transform transition-transform duration-300">
        <div className=" p-11 mr-28">
          <button
            className="text-gray-900 hover:text-gray-800 "
            onClick={onClose}
          >
            ✖
          </button>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mt-5">Login</h1>
            <img src={loginimgImg} alt="loginimg" className="w-28" />
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full h-16 p-2 border border-gray-300 rounded mb-4"
          />
          <button className="w-full h-11 bg-orange-600 font-bold text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <p className="text-[12px] mt-1 text-gray-600">
            By clicking on Login, I accept the{" "}
            <span className="text-black">Terms & Conditions</span> &{" "}
            <span className="text-black">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
