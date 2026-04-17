import React from 'react'
import { CgProfile } from "react-icons/cg";
import { UserData, Userstatus } from '../../../Redux/User.js';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProfileData = (props) => {
  const dataSelect = useSelector(state => state.User.User)
  
  // useEffect(() => {
  //   // console.log("data select is ", dataSelect[0].firstName)
  //   console.log("data select is ", dataSelect[0])
  
  // }, [])

  const Logout = async () => {
    try {
      await axios.post("http://localhost:3000/User/logout", {}, { withCredentials: true }).then((data) => {
        console.log("logout data is ", data)
      }).catch((err) => {
        console.log("logout error is ", err)
      })
    }
    catch (err) {
      console.log("error during logout ", err)
    }
  }

  return (
    <div className={`absolute left-[-150%] border-1 backdrop-blur border-gray-200 bottom-[-160px] w-40 h-40 rounded-2xl   z-20 flex  justify-center ${props.ShowProfile ? "" : "hidden"}  items-center   `}>
   
      <div className="DataCenter h-[100%] w-[100%] flex  flex-col justify-around">
        <div className="ProfileD px-2  gap-2 flex justify-around   ">

          <div className="Left flex items-center justify-center">
            <CgProfile size={35} />
          </div>

          <div className="Right text-[12px] font-bold">
            <div>{(dataSelect && dataSelect[0]) ? dataSelect[0].firstName ? dataSelect[0].firstName : "" : "User"}</div>
            <div>+91 {(dataSelect && dataSelect[0]) ? dataSelect[0].phoneNumber ? dataSelect[0].phoneNumber : "" : "1234567890"}</div>
          </div>
        </div>

        <Link to={"/Order"} className='self-center w-[100%] flex items-center font-bold justify-center hover:bg-gray-300 h-8'>Order</Link>
        <Link to={"/UserCart"} className='self-center w-[100%] flex items-center font-bold justify-center hover:bg-gray-300 h-8'>Cart</Link>
        <div onClick={() => { Logout() }} className='self-center w-[90%] px-2 h-8 rounded bg-red-500 hover:bg-red-400 text-white flex items-center font-bold justify-center'> Logout</div>
      </div>
    </div>
  )
}

export default ProfileData
