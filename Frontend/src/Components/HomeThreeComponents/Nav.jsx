import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import ProfileData from './ProfileData';
import { Userstatus } from '../../../Redux/User';
import { useSelector } from 'react-redux';

const Nav = () => {
  
  const[ShowProfile,setShowProfile]=useState(false)

  const login=useSelector(state=>state.User.value)
  return (
    <div id='Nav' className='flex items-center justify-center  h-[100px] '>
      <div id="NavContent" className='flex w-[65%]  justify-between items-center '>
        <div className='text-[35px] volkhov'>
            FASCO
        </div>
        <ul className='flex gap-10 text-[calc(var(--LogoSize)-16px)] items-center '>
            <Link to={"/"}  className='border-b border-transparent hover:border-black cursor-pointer'>Home</Link>
            <li  className='border-b border-transparent hover:border-black cursor-pointer'>Deals</li>
            <li  className='border-b border-transparent hover:border-black cursor-pointer'>New Arrivals</li>
            <Link to={"/Shop"} className='border-b border-transparent hover:border-black cursor-pointer'>Shop</Link>
           {login!==200 && <Link to={"/Signin"}  className='border-b border-transparent hover:border-black cursor-pointer'> Sign in </Link>} 
           {login!==200 && <Link to={"/Signup"} className='border-1 px-6 py-2 rounded-[8px] bg-[#000000] text-[#FFFFFF]'>Sign up</Link>} 
           {login==200 &&  <Link className='w-10 h-10     flex items-center justify-center  rounded-full  text-black relative ProfileMain  ' onClick={()=>{setShowProfile(!ShowProfile)}}><CgProfile  size={30}/>
           <ProfileData ShowProfile={ShowProfile} /></Link>}
            
        </ul>
      </div>
    </div>
  )
}

export default Nav
