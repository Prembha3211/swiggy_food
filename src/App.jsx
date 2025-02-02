import React from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Fooddelivery from "./components/Fooddelivery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  return (
    <Provider store={appStore}>
      <div className="app">
        {showNavbar && <Navbar />}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout containing Navbar, Footer, and Outlet
    children: [
      {
        path: "/",
        element: <Hero />, // Hero Page
      },
      {
        path: "/fooddelivery",
        element: <Fooddelivery />, // Food Delivery Page
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter; // Export appRouter instead of rendering
