import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import ProfileData from './ProfileData';
import { Userstatus } from '../../../Redux/User';
import { useSelector } from 'react-redux';

const Nav = () => {
  
  const[ShowProfile,setShowProfile]=useState(false)

  const login=useSelector(state=>state.User.value)

  // useEffect(()=>{
  //   console.log("component rendered profile data in nav")
  // },[login])
  return (
    <div id='Nav' className='flex items-center justify-center min-h-[80px] py-4'>
      <div id="NavContent" className='flex w-[95%] lg:w-[80%] justify-between items-center gap-4'>

        <div className='xl:text-[35px] lg:text-[30px] md:text-[28px] text-[24px] volkhov font-bold'>
            FASCO
        </div>

        <ul className='flex items-center gap-3 sm:gap-6 md:gap-10 text-[11px] sm:text-[13px] md:text-[14px]'>
            <Link to={"/"} className='border-b border-transparent hover:border-black transition-all'>Home</Link>
            <li className='hidden sm:block border-b border-transparent hover:border-black cursor-pointer transition-all'>Deals</li>
            <li className='hidden lg:block border-b border-transparent hover:border-black cursor-pointer transition-all'>New Arrivals</li>
            <Link to={"/Shop"} className='border-b border-transparent hover:border-black transition-all'>Shop</Link>
           {login!==200 && <Link to={"/Signin"} className='hidden sm:block border-b border-transparent hover:border-black transition-all'>Sign in</Link>} 
           {login!==200 && <Link to={"/Signup"} className='px-4 py-2 sm:px-6 sm:py-2 rounded-[8px] bg-black text-white text-[10px] sm:text-[13px] hover:bg-gray-800 transition-all'>Sign up</Link>} 
           {login==200 &&  <Link className='w-10 h-10 flex items-center justify-center rounded-full text-black relative' onClick={()=>{setShowProfile(!ShowProfile)}}><CgProfile size={30}/>
           <ProfileData ShowProfile={ShowProfile} /></Link>}
        </ul>

      </div>
    </div>
  )
}

export default Nav
