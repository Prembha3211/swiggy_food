import { useEffect, useState } from "react";
import { CART_API } from "../utils/constants";

const useCart = (resId) => {
  const [cartInfo, setCartInfo] = useState(null);

  useEffect(() => {
    fetchCart();
  }, [resId]);

  const fetchCart = async () => {
    const response = await fetch(CART_API);
    const json = await response.json();
    setCartInfo(json?.data);
  };

  return cartInfo;
};

export default useCart;
