import React from 'react'
import { useNavigate } from 'react-router-dom'



const Confimation = () => {
    const navigate=useNavigate()
  return (
        <div className='w-[100%] h-[100vh]  flex justify-center items-center '>

            <div className="MainBox  w-[80%] h-[90%] rounded-2xl border-1 border-[#DBDBDB]  flex">

                <div className="Image w-[50%] h-[100%]">
                    <img src="../Accounts/image1.png" className='w-[100%] h-[100%]' alt="" srcset="" />
                </div>

                <div className="Content w-[50%] h-[100%]  flex flex-col justify-end items-center ">
                    <div className="w-[70%] h-[93%] relative">
                        <div className="Logo volkhov text-[40px] pb-10 text-gray-500">FASCO</div>
                        <div className="Heading volkhov text-[15px] font-bold  pb-3 mt-20 mb-5">Enter The Confirmation Code</div>
                        
                        <div className="Inputs flex flex-col gap-4 ">

                           
                                <input type="text" className=' focus:outline-none w-[100%] border-b-1 border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Confirmation Code' />
                               
                         
                         
                        </div>
                        
                        <div className="Btns">
                            <div onClick={()=>{navigate("/NewPassword")}} className="checkoutButton mt-6 bg-black text-white w-[90%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl text-[12px]">
                               Recover Account
                            </div>
                           
                        </div>
                        <div className="ForgetPassword  text-[11px] font-bold text-center mr-5 mt-2">Didn’t receive Confirmation Code?  <span className='text-[#5B86E5]'>Resend Now</span></div>
                        <div className="TermAndCondition  text-[11px]  text-end absolute bottom-3 right-[-25px] font-[500]">FASCO Terms & Codnitions</div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Confimation
