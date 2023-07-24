import React from 'react';
import {single, double, triple } from '../assets'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='container grid md:grid-cols-3 gap-8'>
            {/* Card first */}
            <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8' >Single user</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium divide-y my-8'>
                <p className='py-2'>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2 border-b'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
            {/* Card second */}
            <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8' >Single user</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium divide-y my-8'>
                <p className='py-2'>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2 border-b'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
            {/* Card Third */}
            <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8' >Single user</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium divide-y my-8'>
                <p className='py-2'>500 GB Storage</p>
                <p className='py-2'>1 Granted User</p>
                <p className='py-2 border-b'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Card