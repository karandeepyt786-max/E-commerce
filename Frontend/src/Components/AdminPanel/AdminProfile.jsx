import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Main1 from '../AllMains/Main1/Main1'
import Main3 from '../AllMains/Main3/Main3'
import Main4 from '../AllMains/Main4/Main4'
import Main8 from '../AllMains/Main8/Main8'
import { AdminData, AdminStatus } from '../../../Redux/Admin'
import ProfileData from './ProfileData'
import { useDispatch, useSelector } from 'react-redux'
import { CgProfile } from "react-icons/cg";
import axios from "axios"

const AdminProfile = () => {

  const dispatch=useDispatch()

  const isLogInOutAdmin=async()=>{
    try{
    await   axios.post("http://localhost:3000/Admin/isLoginOut",{},{withCredentials:true}).then((data)=>{
let resposeuserdata=data.data.data
 console.log("loginout Admin response ",dispatch(AdminStatus({status:data.status})))
        dispatch(AdminData({Details:resposeuserdata}))
   })
    }
    catch(err){
      console.log("loginout Admin error ",err)
    }
  }
  useEffect(()=>{
    isLogInOutAdmin()
  })



    const login=useSelector(state=>state.Admin.value)
      const[ShowProfile,setShowProfile]=useState(false)
    


  console.log("Admin data from AdminProfile ",AdminData)

  return (
 <div className="flex flex-col items-center gap-3">
      <div id="NavContent" className='flex w-[65%]  justify-between items-center '>
        <div className='text-[35px] volkhov'>
            FASCO
        </div>
        <ul className='flex gap-10 text-[calc(var(--LogoSize)-16px)] items-center '>
            <Link to={"/AdminProfile"}  className='border-b border-transparent hover:border-black cursor-pointer'>Home</Link>
            <li  className='border-b border-transparent hover:border-black cursor-pointer'>Deals</li>
            <li  className='border-b border-transparent hover:border-black cursor-pointer'>New Arrivals</li>
            <Link to={"/CreateProduct"} className='border-b border-transparent hover:border-black cursor-pointer'>Create Products</Link>
            <Link to={"/AdminAllProducts"} className='border-b border-transparent hover:border-black cursor-pointer'>Shop</Link>
  {login!==200 && <Link to={"/Signin"}  className='border-b border-transparent hover:border-black cursor-pointer'> Sign in </Link>} 
           {login!==200 && <Link to={"/Signup"} className='border-1 px-6 py-2 rounded-[8px] bg-[#000000] text-[#FFFFFF]'>Sign up</Link>} 
           {login==200 &&  <Link className='w-10 h-10     flex items-center justify-center  rounded-full  text-black relative ProfileMain  ' onClick={()=>{setShowProfile(!ShowProfile)}}><CgProfile  size={30}/>
           <ProfileData ShowProfile={ShowProfile} /></Link>}
        </ul>
      </div>
      <Main1/>
      <Main4 ImageUrl={"http://localhost:3000/Products/1774844789876-gro.jpg"}/>
      <Main8/>
 </div>
  )
}

export default AdminProfile
{/* <img src="http://localhost:3000/Products/1774844789876-gro.jpg" alt="" srcset="" /> */}

