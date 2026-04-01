import React from 'react'
import { Link } from 'react-router-dom'
const Nav2 = () => {
  return (
 <div id='Nav' className='flex items-center justify-center h-[100px] self-center w-[calc(98vw+12px)]  '>
      <div id="NavContent" className='flex w-[75%]  justify-between items-center  '>
        <div className='text-[35px] volkhov'>
            FASCO
        </div>
        <ul className='flex gap-10 text-[calc(var(--LogoSize)-16px)] items-center '>
            <Link to={"/"}  className='border-b border-transparent hover:border-black cursor-pointer text-[#484848] font-[400]'>Home</Link>
            <Link to={"/Shop"} className='border-b border-transparent hover:border-black cursor-pointer text-[#484848] font-[400]'>Shop</Link>
            <Link to={"/Products"}  className='border-b border-transparent hover:border-black cursor-pointer text-[#484848] font-[400]'>Products</Link>
            <Link to={"/Checkout"}  className='border-b border-transparent hover:border-black cursor-pointer text-[#484848] font-[400]'>Checkout</Link>
            <li  className='border-b border-transparent hover:border-black cursor-pointer flex items-baseline gap-1 text-[#484848] font-[400]'>Pages <img src="../Routes/Nav2/image5.png" className='w-[7px] h-[5px] '  /></li>
  
        </ul>

        <ul className='flex  text-[calc(var(--LogoSize)-16px)] items-center w-40  '>
        <img src="../Routes/Nav2/image1.png" className='w-9 '     alt="" srcset="" />
        <img src="../Routes/Nav2/image2.png" className='w-9 '  alt="" srcset="" />
      <Link to={"/Thumbnail"}> <img src="../Routes/Nav2/image3.png" className='w-9 '  alt="" srcset="" /></Link>  
       <Link to={"/Cart"}> <img src="../Routes/Nav2/image4.png" className='w-8 '  alt="" srcset="" /></Link>
        </ul>


      </div>
    </div>
  )
}

export default Nav2
