import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className="container">

    <div className='flex justify-between items-center h-24 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='gap-4 hidden md:flex'>
            <li>Home</li>
            <li>Company</li>
            <li>Resource</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='cursor-pointer md:hidden' onClick={()=> setNav(prev => !prev)}>
            {!nav && <AiOutlineMenu size={20} />}
            {nav && <AiOutlineClose size={20} />}
        </div>
        <div className={`fixed ${nav ? 'left-0' : '-left-full'} transition-all duration-500 ease-in-out top-0 h-full w-[60%] border-r border-r-gray-900  bg-[#000300]`}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='p-4 uppercase divide-y divide-gray-600'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resource</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar