import React from 'react'
import heroImg from './hero.svg'
import woman from './woman.svg'
const Hero = () => {
    return (
        <div className='header__hero relative bg-[#FAFAFA] border-[1px] border-[#000000]-10 rounded-xl flex items-center'>
            <div className='hero__texts px-[50px] flex flex-col items-start'>
                <span className='text-base leading-[25px] text-[#03081F]'>
                    Order Restaurant food, takeaway and groceries.
                </span>
                <h1 className='text-6xl text-start mb-[50px] w-2/3'>Feast Your Senses, <span className='text-[#FC8A06]'>Fast and Fresh</span></h1>
                <form class="w-[300px]">
                    <label class="block text-start text-gray-700 text-sm font-bold mb-5">Enter a postcode to see what we deliver</label>
                    <div class="flex relative">
                        <input placeholder="e.g. EC4R 3TE" class="w-full h-14 border border-black-400 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button type="submit" class="bg-orange-500 h-[56px] text-white px-4 py-2 rounded-3xl absolute right-0 bottom-0 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Search</button>
                    </div>
                </form>
            </div>
            <div className='hero__img pt-[40px]'>
                <img src={heroImg} alt="Here should be Hero Img"/>
            </div>
            <img className='absolute w-[650px] bottom-0 left-1/4' src={woman} alt='WOMAN' />
        </div>
    )
}

export default Hero