import React from 'react';

const CategoriesPic = ({ img, name, numOfRestaurants }) => {
  return (
    <div className="bg-[#F5F5F5] shadow-md rounded-lg overflow-hidden">
      <img src={'imgs/' + img} alt={'Image of ' + name} className="w-full h-50 object-cover" />
      <div className="py-4 pl-5 flex flex-col items-start">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-[#FC8A06]">{numOfRestaurants} Restaurants</p>
      </div>
    </div>
  );
};

export default CategoriesPic;