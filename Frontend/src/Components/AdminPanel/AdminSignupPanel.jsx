import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const AdminSignupPanel = () => {
    const navigate = useNavigate()

    const SubmitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        if (formData) {
            try {
                await axios.post("http://localhost:3000/Admin/signup",
                    {
                        firstName: formData.get("firstName"),
                        lastName: formData.get("lastName"),
                        Email: formData.get("Email"),
                        Phone: formData.get("Phone"),
                        Password: formData.get("Password"),
                        confirmPassword: formData.get("confirmPassword"),
                    }, { withCredentials: true }).then((data) => {
                        let status = data.status
                        console.log(status)
                        navigate("/AdminProfile")

                    }).catch((err) => {
                        let status = err.status
                        console.log(status)
                    })
                console.log("data send")

            }
            catch (err) {
                console.log("axios error is ", err)
            }
        }

    }

    return (
        <div className='w-[100%] h-[100vh]  flex justify-center items-center '>

            <div className="MainBox  w-[80%] h-[90%] rounded-2xl border-1 border-[#DBDBDB]  flex">

                <div className="Image w-[50%] h-[100%]">
                    <img src="../Accounts/image2.png" className='w-[100%] h-[100%]' alt="" srcset="" />
                </div>

                <div className="Content w-[50%] h-[100%]  flex flex-col justify-end items-center ">
                    <div className="w-[70%] h-[93%] relative">
                        <div className="Logo volkhov text-[40px] pb-10 text-gray-500">FASCO</div>
                        <div className="Heading volkhov text-[15px] font-bold  pb-3">Create Admin Account</div>
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
                        <div className="Or text-[20px] text-gray-500 font-bold text-center pb-10 pt-13">- OR -</div>

                        <form action="" onSubmit={(e) => { SubmitHandler(e) }}>
                            <div className="Inputs flex flex-col gap-4 ">

                                <div className="Line1 flex justify-between gap-2 w-[100%] ">
                                    <input type="text" name='firstName' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='First Name' />
                                    <input type="text" name='lastName' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Last Name' />
                                </div>
                                <div className="Line2">
                                    <input type="text" name='Email' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Email Adress' />
                                    <input type="tel" maxLength={10} pattern="[0-9]{10}" name='Phone' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Phone Number' />
                                </div>
                                <div className="Line3">
                                    <input type="text" name='Password' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Pasword' />
                                    <input type="text" name='confirmPassword' className=' w-[50%] border-b-1 focus:outline-none border-b-gray-300 text-gray-800 text-[10px] pb-1' placeholder='Confirm Password' />
                                </div>
                            </div>

                            <div className="Btns">
                                <input type='submit' value={"Create Account"} className="checkoutButton text-center mt-6 bg-black text-white w-[90%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl text-[12px]" />
                            </div>

                        </form>

                        <div className="ForgetPassword  text-[11px] font-bold text-end mr-5 mt-2">Already have an account? <span className='text-[#5B86E5]'>Login</span></div>
                        <div className="ForgetPassword  text-[11px] font-bold text-end mr-5 mt-2">Signup as admin <Link to={"/AdminSignupPanel"} className='text-[#5B86E5]'>Signup</Link></div>
                        <div className="TermAndCondition  text-[11px]  text-end absolute bottom-3 right-[-25px] font-[500]">FASCO Terms & Codnitions</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminSignupPanel
