import React from "react";

const Cartcard = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="p-4 border-b bg-white">
          <img
            src={`https://res.cloudinary.com/demo/image/upload/${item.cloudinary_image_id}`}
            alt={item.name}
            className="w-16 h-16"
          />
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm">{item.area_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cartcard;
