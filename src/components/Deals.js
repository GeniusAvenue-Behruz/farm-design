import React, { useState } from 'react';
import DealsPic from './DealsPic';

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState('Others');

  const dealsData = {
    Vegan: [
      { img: 'vegan1.svg', name: 'Vegan Delight', place: 'Restaurant', percent: '30' },
      { img: 'vegan2.svg', name: 'Green Cafe', place: 'Restaurant', percent: '25' },
    ],
    Sushi: [
      { img: 'sushi1.svg', name: 'Sushi World', place: 'Restaurant', percent: '20' },
      { img: 'deal1.svg', name: 'Sushi Express', place: 'Restaurant', percent: '15' },
    ],
    Pizza: [
      { img: 'deal2.svg', name: 'Pizza House', place: 'Restaurant', percent: '35' },
      { img: 'deal3.svg', name: 'Pizza King', place: 'Restaurant', percent: '30' },
    ],
    Others: [
      { img: 'deal1.svg', name: 'Chef Burgers London', place: 'Restaurant', percent: '40' },
      { img: 'deal2.svg', name: 'Grand Ai Cafe London', place: 'Restaurant', percent: '20' },
      { img: 'deal3.svg', name: 'Butterbrot Cafe London', place: 'Restaurant', percent: '17' },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className='deals container'>
      <div className='deals__header mb-10 flex justify-between items-center'>
        <h1 className='text-2xl text-black font-bold'>Up to - 40% Order.uk exclusive deals</h1>
        <ul className='deals__header-menu flex'>
          <li className='deals-link'><a href='#!' onClick={() => handleCategoryChange('Vegan')}>Vegan</a></li>
          <li className='deals-link'><a href='#!' onClick={() => handleCategoryChange('Sushi')}>Sushi</a></li>
          <li className='deals-link'><a href='#!' onClick={() => handleCategoryChange('Pizza')}>Pizza & Fast food</a></li>
          <li className='deals-link'><a href='#!' onClick={() => handleCategoryChange('Others')}>Others</a></li>
        </ul>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {dealsData[selectedCategory].map((deal, index) => (
          <DealsPic
            key={index}
            img={deal.img}
            name={deal.name}
            place={deal.place}
            percent={deal.percent}
          />
        ))}
      </div>
    </section>
  );
}

export default Deals;
