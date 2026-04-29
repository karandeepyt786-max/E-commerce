import React from 'react'

const NewPassword = () => {
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
              <h2 className="text-2xl font-bold volkhov text-gray-800 mb-2">Create New Password</h2>
              <p className="text-gray-500 text-sm">Please choose a strong password for your account.</p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="password" 
                  className='w-full border-b-2 border-gray-200 focus:border-black outline-none py-3 text-lg transition-colors placeholder:text-gray-300' 
                  placeholder='New Password' 
                />
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  className='w-full border-b-2 border-gray-200 focus:border-black outline-none py-3 text-lg transition-colors placeholder:text-gray-300' 
                  placeholder='Confirm New Password' 
                />
              </div>
              
              <button 
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-[0.98]"
              >
                Reset Password
              </button>
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

export default NewPassword
