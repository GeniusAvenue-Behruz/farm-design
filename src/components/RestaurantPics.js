import React from 'react';

const RestaurantPics = ({ img, name, numOfRestaurants }) => {
  return (
    <div className="bg-[#FC8A06] shadow-sm mb-52 shadow-[#00000036] rounded-lg overflow-hidden hover:animate-ping duration-75">
      <img src={'imgs/' + img} alt={'Image of ' + name} className="w-full h-50 object-cover" />
      <div className="py-4 pl-5 flex flex-col items-center">
        <h3 className="text-lg text-white font-semibold">{name}</h3>
    </div>
    </div>
  );
};

export default RestaurantPics;