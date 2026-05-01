import React from 'react'



//react functions
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import { Userstatus } from '../../../Redux/User'
import { useDispatch, useSelector } from 'react-redux'

const Signup = () => {

    const Dispatch = useDispatch()

    const SelectorData = useSelector(state => state.User.value)

    const navigate = useNavigate()

    React.useEffect(() => {
        if (SelectorData === 200) {
            navigate("/")
        }
    }, [SelectorData, navigate])

    const formHandler = async (e) => {
        e.preventDefault(); console.log("submit")
      

        const formData = new FormData(e.target)

        console.log(formData)

        const confirmEmail = formData.get("Email").endsWith("@gmail.com")

        if (formData && confirmEmail) {
            try {
                await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/signup",
                    {
                        firstName: formData.get("firstName"),
                        lastName: formData.get("lastName"),
                        Email: formData.get("Email"),
                        Phone: formData.get("Phone"),
                        Password: formData.get("Password"),
                        confirmPassword: formData.get("confirmPassword"),
                    }, { withCredentials: true }).then((data) => {

                        navigate("/")
                        let status = data.status
                        console.log(status)
                        status && Dispatch(Userstatus({ status: status }))
                    }).catch((err) => {
                        let status = err.status
                        console.log(status)
                        status && Dispatch(Userstatus({ status: status }))
                    })
                console.log("data send")

            }
            catch (err) {
                console.log(err.message)
            }
        }

    }


    return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#F9F9F9] p-4 sm:p-6'>
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2">
          <img src="../Accounts/image2.png" className='w-full h-full object-cover' alt="Signup Visual" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-16 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="text-4xl lg:text-5xl volkhov text-gray-400 mb-6 tracking-tight">FASCO</div>
            <h2 className="text-lg font-bold volkhov text-[#484848] mb-6">Create Account</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full">
                <img src="../Accounts/Google.png" className='w-5 h-5' alt="Google" />
                <span className="text-xs font-bold text-gray-600">Sign up with Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full">
                <img src="../Accounts/Email.png" className='w-5 h-5' alt="Email" />
                <span className="text-xs font-bold text-gray-600">Sign up with Email</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative px-4 bg-white text-gray-400 text-sm font-bold">- OR -</span>
            </div>

            <form action="POST" onSubmit={formHandler} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" name='firstName' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='First Name' />
                <input required type="text" name='lastName' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='Last Name' />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="email" name='Email' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='Email Address' />
                <input required type="tel" maxLength={10} name='Phone' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='Phone Number' />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="password" name='Password' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='Password' />
                <input required type="password" name='confirmPassword' className='border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' placeholder='Confirm Password' />
              </div>
              
              <button type='submit' className="w-full bg-black text-white py-4 rounded-xl font-bold shadow-lg shadow-black/20 hover:bg-gray-800 transition-colors mt-4">
                Create Account
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-2 items-end text-xs font-bold">
              <div className="text-gray-500">Already have an account? <Link to="/Signin" className='text-[#5B86E5]'>Login</Link></div>
              <div className="text-gray-400">Signup as admin <Link to="/AdminSignupPanel" className='text-[#5B86E5]'>Signup</Link></div>
            </div>

            <div className="mt-8 text-[10px] text-gray-400 font-medium text-right">
              FASCO Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Signup
