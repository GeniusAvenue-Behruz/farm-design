import React from 'react';

const DealsPic = ({ img, place, name, percent }) => {
  return (
    <div className="relative h-[325px] rounded-lg overflow-hidden shadow-inset"  style={{ backgroundImage: `url(imgs/${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute w-20 top-0 right-5 bg-[#03081F] text-white text-[18px] font-bold p-2 rounded-b-lg">
        -{percent}%
      </div>
      <div className="flex flex-col items-start absolute bottom-0 left-0 p-4 text-white">
        <span className="font-semibold text-[#FC8A06] text-lg">{place}</span>
        <h2 className="text-[24px] font-bold">{name}</h2>
      </div>
    </div>
  );
};

export default DealsPic;
