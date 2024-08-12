import React from 'react'
import RestaurantPics from './RestaurantPics.js'

const Restaurants = () => {
  return (
    <div className='flex flex-col items-start container'>
        <h1 className='text-[32px] font-bold mb-10'>Popular Restaurants</h1>
        <div className='grid grid-cols-6 gap-5'>
            <RestaurantPics img='mcdonald.svg' name="McDonald's London" />
            <RestaurantPics img='papa.svg' name="Papa Johns" />
            <RestaurantPics img='kfc.svg' name="KFC West London" />
            <RestaurantPics img='texas.svg' name="Texas Chicken" />
            <RestaurantPics img='burgerking.svg' name="Burger King" />
            <RestaurantPics img='shaurma.svg' name="Shaurma 1" />
        </div>
    </div>
  )
}

export default Restaurants