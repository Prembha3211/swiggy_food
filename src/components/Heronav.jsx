import { useState } from "react";
import { logoImg } from "../utils";
import { Menu, X } from "lucide-react";

const Heronav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-orange-600">
      {/* Mobile Navigation */}
      <div className="flex justify-between items-center px-4 lg:px-36">
        <div>
          <img
            src={logoImg || "/placeholder.svg"}
            alt="logo"
            className="h-8 mt-4 lg:h-11 lg:mt-8"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden mt-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 font-bold text-white mt-8">
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
          <button className="w-32 h-14 rounded-2xl bg-black">Sign in</button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-start space-y-4 px-4 py-4 font-bold text-white">
            <ul className="flex flex-col space-y-4 w-full">
              <li>Swiggy Corporate</li>
              <li>Partner with us</li>
            </ul>
            <button className="border border-gray-200 w-full h-12 rounded-xl flex items-center justify-between px-4">
              <span>Get the App</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right w-5 h-5 font-bold"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </button>
            <button className="w-full h-12 rounded-xl bg-black">Sign in</button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Heronav;
