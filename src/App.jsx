import React from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Fooddelivery from "./components/Fooddelivery";
import Instamart from "./components/Instamart";
import Genie from "./components/Genie";
import Dineout from "./components/Dineout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </div>
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
        path: "/instamart",
        element: <Instamart />, // Instamart Page
      },
      {
        path: "/genie",
        element: <Genie />, // Genie Page
      },
      {
        path: "/dineout",
        element: <Dineout />, // Dineout Page
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default appRouter; // Export appRouter instead of rendering
