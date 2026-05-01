import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signin = () => {
  const navigate = useNavigate()

const SubmitHandler=async(e)=>{
e.preventDefault()
const formData=new FormData(e.target)
let isEMail=formData.get("Email").endsWith("@gmail.com")

if(formData && isEMail){
    try{
      const response = await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/signin",{Email:formData.get("Email"),Password:formData.get("Password")},{withCredentials:true})
      if(response.status === 200){
        console.log("signin route success")
        navigate("/")
      }
    }
catch(err){
    console.log(err.message)
}
}

console.log("submit ",formData.get("Email"))
console.log("submit ",formData.get("Password"))
}

    return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#F9F9F9] p-4 sm:p-6'>
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2">
          <img src="../Accounts/image1.png" className='w-full h-full object-cover' alt="Signin Visual" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="text-4xl lg:text-5xl volkhov text-gray-400 mb-8 tracking-tight">FASCO</div>
            <h2 className="text-lg font-bold volkhov text-[#484848] mb-6">Sign In To FASCO</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full">
                <img src="../Accounts/Google.png" className='w-5 h-5' alt="Google" />
                <span className="text-xs font-bold text-gray-600">Sign up with Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full">
                <img src="../Accounts/Email.png" className='w-5 h-5' alt="Email" />
                <span className="text-xs font-bold text-gray-600">Sign up with Email</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative px-4 bg-white text-gray-400 text-sm font-bold">- OR -</span>
            </div>

            <form onSubmit={SubmitHandler} className="flex flex-col gap-6">
              <input 
                type="email" 
                name='Email' 
                required 
                className='w-full border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' 
                placeholder='Email Address' 
              />
              <input 
                type="password" 
                name='Password' 
                required 
                className='w-full border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors' 
                placeholder='Password' 
              />
              
              <div className="flex flex-col gap-4 mt-4">
                <button type='submit' className="w-full bg-black text-white py-4 rounded-xl font-bold shadow-lg shadow-black/20 hover:bg-gray-800 transition-colors">
                  Sign In
                </button>
                <button type='button' onClick={() => navigate("/Signup")} className="w-full border border-[#5B86E5] text-[#5B86E5] py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Register Now
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-col gap-2 items-end text-xs font-bold">
              <Link to="/ForgetPassword" name='forget' className="text-[#5B86E5]">Forget Password?</Link>
              <div className="text-gray-400">Sign in as admin <Link to="/AdminSigninPanel" className='text-[#5B86E5]'>Signin</Link></div>
            </div>

            <div className="mt-12 text-[10px] text-gray-400 font-medium text-right">
              FASCO Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Signin
