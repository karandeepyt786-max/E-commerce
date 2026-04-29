import React from 'react'
import { useNavigate } from 'react-router-dom'


const ForgetPassword = () => {
const navigate=useNavigate()
    
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#F9F9F9] p-4 sm:p-6'>
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="hidden md:block md:w-1/2 h-[400px] md:h-auto">
          <img 
            src="../Accounts/image1.png" 
            className='w-full h-full object-cover' 
            alt="Authentication" 
          />
        </div>

        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="Logo volkhov text-4xl mb-12 text-gray-800 text-center md:text-left">FASCO</h1>
            
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-2xl font-bold volkhov text-gray-800 mb-2">Forgot Password</h2>
              <p className="text-gray-500 text-sm">Enter your details to receive a confirmation code.</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" className='w-full border-b border-gray-200 focus:border-black outline-none py-2 text-sm transition-colors' placeholder='First Name' />
                <input type="text" className='w-full border-b border-gray-200 focus:border-black outline-none py-2 text-sm transition-colors' placeholder='Last Name' />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" className='w-full border-b border-gray-200 focus:border-black outline-none py-2 text-sm transition-colors' placeholder='Email Address' />
                <input type="tel" className='w-full border-b border-gray-200 focus:border-black outline-none py-2 text-sm transition-colors' placeholder='Phone Number' />
              </div>
              
              <button 
                onClick={() => navigate("/Confimation")} 
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]"
              >
                Send Confirmation Code
              </button>
            </div>
            
            <div className="mt-8 text-center md:text-left">
              <p className="text-sm font-medium text-gray-500">
                Already have an account? <button onClick={() => navigate("/Signin")} className='text-blue-500 hover:underline'>Login</button>
              </p>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-50 text-center md:text-right">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">FASCO Terms & Conditions</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ForgetPassword
