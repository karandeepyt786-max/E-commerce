import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


const Signin = () => {

const SubmitHandler=async(e)=>{
e.preventDefault()
const formData=new FormData(e.target)
let isEMail=formData.get("Email").endsWith("@gmail.com")

if(formData && isEMail){
    try{
    await axios.post("http://localhost:3000/user/signin",{Email:formData.get("Email"),Password:formData.get("Password")},{withCredentials:true})
}
catch(err){
    console.log("signin Error ",err)
}
}

console.log("submit ",formData.get("Email"))
console.log("submit ",formData.get("Password"))
}

    return (
        <div className='w-[100%] h-[100vh]  flex justify-center items-center '>

            <div className="MainBox  w-[80%] h-[90%] rounded-2xl border-1 border-[#DBDBDB]  flex">

                <div className="Image w-[50%] h-[100%]">
                    <img src="../Accounts/image1.png" className='w-[100%] h-[100%]' alt="" srcset="" />
                </div>

                <div className="Content w-[50%] h-[100%]  flex flex-col justify-end items-center ">
                    <div className="w-[70%] h-[93%] relative">
                        <div className="Logo volkhov text-[40px] pb-10 text-gray-500">FASCO</div>
                        <div className="Heading volkhov text-[15px] font-bold  pb-3">Sign In To FASCO</div>
                        <div className="SigninWays flex gap-8">
                            <div className="Google items-center flex w-45 h-9 border-1 border-[#5B86E5] Heading volkhov text-[12px] justify-center gap-2 rounded">
                                <div className="Icon">    <img src="../Accounts/Google.png" className='w-5 h-5' alt="" srcset="" />
                                </div>
                                <div className="text font-bold text-[10px] text-gray-600">Sign up with Google</div>
                            </div>
                            <div className="Email items-center flex w-45  h-9 border-1 border-[#5B86E5] Heading volkhov text-[12px] justify-center gap-3 rounded">
                                <div className="Icon"><img src="../Accounts/Email.png" className='w-5 h-5' alt="" srcset="" /></div>
                                <div className="text font-bold text-[10px] text-gray-600">Sign up with Email</div>
                            </div>
                        </div>
                        <div className="Or text-[20px] text-gray-500 font-bold text-center pb-6 pt-10">- OR -</div>


                        <form onSubmit={(e) => { SubmitHandler(e) }}>

                            <div className="Inputs flex flex-col gap-2 ">
                                <input type="text" name='Email' className=' border-b-1 focus:outline-none border-b-gray-300 text-[12px] pb-1' placeholder='Email' />
                                <input type="text" name='Password' className=' border-b-1 focus:outline-none border-b-gray-300 text-[12px] pb-1' placeholder='Password' />
                            </div>

                            <div className="Btns">
                                <input type='submit' value={"Sign in"} className="checkoutButton mt-6 bg-black text-white w-[90%] h-10  rounded mx-auto shadow-2xl flex items-center justify-center text-center" />
                                <input type='submit' value={"Register Now"} className="checkoutButton mt-6 border-1 border-[#5B86E5]  text-[#5B86E5] w-[90%] h-10 flex items-center justify-center rounded mx-auto text-center" />
                            </div>

                        </form>




                        <div className="ForgetPassword text-[#5B86E5] text-[11px] font-bold text-end mr-5 mt-2"><Link to={"/ForgetPassword"}>Forget Password?</Link></div>
                        <div className="ForgetPassword  text-[11px] font-bold text-end mr-5 mt-2">Signin as admin <Link to={"/AdminSigninPanel"} className='text-[#5B86E5]'>Signin</Link></div>

                        <div className="TermAndCondition  text-[11px]  text-end absolute bottom-3 right-[-25px] font-[500]">FASCO Terms & Codnitions</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signin
