import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageId, setImageId] = useState([]);
  const [brands, setBrands] = useState([]);
  const [rescuisine, setRescuisine] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.9690247&lng=72.8205292&carousel=true&third_party_vendor=1"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();

      setRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setImageId(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info ||
          []
      );
      setBrands(json?.data?.cards[6]?.card?.card?.brands || []);
      setRescuisine(json?.data?.cards[7]?.card?.card?.brands || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    restaurants,
    loading,
    error,
    imageId,
    brands,
    rescuisine,
  };
};

export default useFetchRestaurants;
