import React, { useState } from 'react'
import Nav from './HomeThreeComponents/Nav'
import Main from './HomeThreeComponents/Main'
import Footer from './HomeThreeComponents/Footer'
import { useEffect } from 'react'
import axios from "axios"
import { UserData, Userstatus } from '../../Redux/User'
import { AdminData, AdminStatus } from '../../Redux/Admin'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {


  const dispatch = useDispatch()
  const userData = useSelector(state => state.User.User)

  const isLogInOut = async () => {
    try {
      await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
        let resposeuserdata = data.data.data
        dispatch(UserData({ Details: resposeuserdata }))
        console.log("loginout response ", data,dispatch(Userstatus({ status: data.status })))
      })
    }
    catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    isLogInOut()
  }, [])

  return (
    <div className='w-screen h-auto '>
      <Main />
    </div>
  )
}

export default Home
