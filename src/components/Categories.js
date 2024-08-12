import React from 'react'
import CategoriesPic from './CategoriesPic.js'

const Categories = () => {
    return (
        <section className='categories m-14 container flex flex-col items-start mx-auto'>
            <h1 className='text-[32px] text-black font-bold mb-10'>Order.uk Popular Categories</h1>
            <div className='grid grid-cols-6 gap-5'>
                <CategoriesPic img="burger.svg" name="Burgers & Fast food" numOfRestaurants={21} />
                <CategoriesPic img="salad.svg" name="Salads" numOfRestaurants={32} />
                <CategoriesPic img="pasta.svg" name="Pasta & Casuals" numOfRestaurants={4} />
                <CategoriesPic img="pizza.svg" name="Pizza" numOfRestaurants={23} />
                <CategoriesPic img="breakfast.svg" name="Breakfast" numOfRestaurants={4} />
                <CategoriesPic img="soup.svg" name="Soup" numOfRestaurants={12} />
            </div>
        </section>
    )
}

export default Categories