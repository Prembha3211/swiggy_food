import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Get the first item's image for the restaurant image (assuming all items are from the same restaurant)
  const restaurantImageId =
    cartItems.length > 0 ? cartItems[0].cloudinaryImageId : null;

  const restaurantName =
    cartItems.length > 0 ? cartItems[0].restaurantName : "Your Restaurant";

  const areaName = cartItems.length > 0 ? cartItems[0].areaName : "Your Area";

  return (
    <section className="bg-gray-200 min-h-screen p-5">
      <div className="flex justify-center gap-5">
        {/* Left-side container */}
        <div className="w-5/12">
          <div className="bg-white p-10 rounded-lg">
            <h1 className="font-bold text-lg">Add a delivery address</h1>
            <p className="text-sm text-gray-400">
              You seem to be in the new location
            </p>
            <input
              placeholder="Add your address...."
              className="border border-gray-400 mt-10 h-11 w-72"
            />
            <button className="border border-green-600 font-bold text-green-600 w-28 mt-10">
              Submit
            </button>
          </div>

          <div className="bg-white p-10 mt-5 rounded-lg">
            <h1 className="font-bold text-lg">Choose payment method</h1>
            <button className="border border-green-600 font-bold text-white bg-green-600 w-full h-11 mt-5">
              PROCEED TO PAY
            </button>
          </div>
        </div>

        {/* Right-side container (Cart items list) */}
        <div className="w-[25rem] bg-white p-5 shadow-lg rounded-lg">
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-600 text-center">
              Your cart is empty
            </p>
          ) : (
            <>
              {/* Show restaurant image at the top of the right-side box */}
              <div className="flex gap-5">
                {restaurantImageId && (
                  <img
                    src={CDN_URL + restaurantImageId}
                    alt="Restaurant"
                    className="w-20 h-20 object-cover rounded-md mb-4"
                  />
                )}
                <div>
                  <h2 className="text-xl font-bold text-center ">
                    {restaurantName}
                  </h2>
                  <p className="font-normal text-gray-500">{areaName}</p>
                </div>
              </div>

              {/* Cart Items List */}
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b p-4"
                >
                  <img src={item.image} className="w-16 h-16 rounded-lg" />
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-green-600 font-semibold">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
