import React from 'react'

const Main8 = () => {
    return (
        <div className='w-[95%] lg:w-[80%] min-h-[400px] flex items-center justify-between py-20 bg-white rounded-3xl my-10 overflow-hidden'>
            <div className="hidden lg:block w-[20%]">
                <img src="../Main8/image1.png" className='w-full h-auto' alt="" />
            </div>

            <div className="w-full lg:w-[60%] flex flex-col items-center gap-6 px-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl text-[#484848] font-bold volkhov text-center leading-tight">
                    Subscribe To Our Newsletter
                </div>
                <p className="text-[#8A8A8A] text-center text-sm max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                </p>
                <div className="w-full max-w-[500px] flex flex-col sm:flex-row gap-3 shadow-lg p-2 rounded-xl bg-white mt-4 border border-gray-100">
                    <input 
                        type="email" 
                        placeholder="michael@ymail.com" 
                        className="flex-grow px-4 py-3 outline-none text-[#8A8A8A] text-sm"
                    />
                    <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium whitespace-nowrap">
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="hidden lg:block w-[20%]">
                <img src="../Main8/image2.png" className='w-full h-auto' alt="" />
            </div>
        </div>
    )
}

export default Main8
