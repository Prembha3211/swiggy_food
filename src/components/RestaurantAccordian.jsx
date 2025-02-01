import React, { useState } from "react";
import AccordList from "./AccordList";
import { ChevronDown } from "lucide-react";

const RestaurantAccordian = ({ data }) => {
  const [showItems, setShowItems] = useState();
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>
            <ChevronDown />
          </span>
        </div>
        <div>{showItems && <AccordList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantAccordian;
