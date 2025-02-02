import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <section className="bg-gray-200  min-h-screen p-5 ">
      <div className="flex justify-center gap-5">
        <div className="w-5/12 ">
          <div className=" bg-white p-10 rounded-lg">
            <div>
              <h1 className="font-bold text-lg">Add a delivery address</h1>
              <p className="text-sm text-gray-400">
                You seem to be in the new location
              </p>
              <input
                placeholder=" Add your address...."
                className="border border-gray-400 mt-10 h-11 w-72"
              ></input>
            </div>
            <button className="border border-green-600 font-bold text-green-600 w-28 mt-10">
              Submit
            </button>
          </div>

          <div className=" bg-white p-10 mt-5 rounded-lg">
            <div>
              <h1 className="font-bold text-lg">Choose payment method</h1>
              <button className="border border-green-600 font-bold text-white bg-green-600 w-full h-11">
                PROCEED TO PAY
              </button>
            </div>
          </div>
        </div>

        <div>
          {cartItems.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty</p>
          ) : (
            <div className="w-[25rem] bg-white p-5 shadow-lg rounded-lg">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <span className="font-bold">{item.name}</span>
                  <span className="text-green-600 font-semibold">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
