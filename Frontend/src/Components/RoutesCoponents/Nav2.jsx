import React from 'react'
import { Link } from 'react-router-dom'
const Nav2 = () => {
  return (
    <div id='Nav' className='flex items-center justify-center min-h-[80px] py-4 w-full bg-white shadow-sm sticky top-0 z-50'>
      <div id="NavContent" className='flex w-[95%] lg:w-[85%] justify-between items-center gap-4'>
        <div className='text-2xl sm:text-3xl volkhov font-bold'>
            FASCO
        </div>

        <ul className='hidden md:flex gap-6 lg:gap-10 text-sm font-medium items-center'>
            <Link to={"/"} className='hover:text-black transition-colors'>Home</Link>
            <Link to={"/Shop"} className='hover:text-black transition-colors'>Shop</Link>
            <Link to={"/Products"} className='hover:text-black transition-colors'>Products</Link>
            <Link to={"/Checkout"} className='hover:text-black transition-colors'>Checkout</Link>
            <li className='flex items-center gap-1 cursor-pointer hover:text-black transition-colors'>Pages <img src="../Routes/Nav2/image5.png" className='w-2 h-1' alt="" /></li>
        </ul>

        <ul className='flex gap-3 sm:gap-5 items-center'>
            <img src="../Routes/Nav2/image1.png" className='w-6 sm:w-8 cursor-pointer' alt="Search" />
            <img src="../Routes/Nav2/image2.png" className='w-6 sm:w-8 cursor-pointer' alt="Favorite" />
            <Link to={"/Thumbnail"}><img src="../Routes/Nav2/image3.png" className='w-6 sm:w-8' alt="Thumbnail" /></Link>  
            <Link to={"/Cart"}><img src="../Routes/Nav2/image4.png" className='w-6 sm:w-8' alt="Cart" /></Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav2
