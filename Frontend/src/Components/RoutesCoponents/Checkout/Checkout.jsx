import React from 'react'
import Main8 from '../../AllMains/Main8/Main8'


const Checkout = () => {
    const countries = [
        "United States",
        "India",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "China",
        "Japan",
        "Brazil",
        "South Africa",
        "Mexico",
        "Russia"
    ]
    return (
        <div className='w-[calc(98vw+12px)] flex flex-col'>
            <div className="Heading volkhov text-[25px] text-center pb-6 w-[75%] self-center">FASCO Demo Checkout</div>
            <div className="MainBox w-[100%] h-[140vh] flex border-t-1 border-t-gray-300">

                <div className="MainBoxLeft  w-[50%] h-[100%] mr-7  flex justify-end">
                    <div className="DataBox w-[60%] h-[100%] ">

                        <div className="Contact">
                            <div className="Line1 flex justify-between">
                                <div className="Heading volkhov text-[25px] ">Contact</div>
                                <div className="Others">
                                    <span className='text-[10px] '>Have an account?</span> <span className='text-[10px] text-blue-400'>Create Account</span>
                                </div>
                            </div>
                            <div className="EmailBox mb-4 mt-4">
                                <input type="text" placeholder='Email Address' className='border-1 focus:outline-0  border-gray-400  text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                            </div>

                        </div>

                        <div className="Delivery">
                            <div className="Heading volkhov text-[25px] ">Delivery</div>
                            <select className='border-1 border-gray-400  text-gray-600 font-[400] w-[100%] h-14 pl-5 focus:outline-0  mt-4 mb-4' >
                                {
                                    countries.map((ite) => (

                                        <option value={`${ite}`}>{ite}</option>
                                    ))
                                }
                            </select>
                            <div className="AdressBox mb-4 mt-4 flex justify-between">
                                <input type="text" placeholder='First Name' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                <input type="text" placeholder='Last Name' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                            </div>
                            <div className="AdressBox mb-4 mt-4">
                                <input type="text" placeholder='Address' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                            </div>
                            <div className="AdressBox mb-4 mt-4 flex justify-between">
                                <input type="text" placeholder='City' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                <input type="text" placeholder='Postal Code' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                            </div>
                            <div className="Tickeer flex items-baseline gap-2">
                                <div className="icons">  <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /></div>
                                <div className="text text-gray-400">Save this info for future</div>
                            </div>
                        </div>

                        <div className="Payment mt-4  mb-4">
                            <div className="Heading volkhov text-[25px] ">Payment</div>
                            <div className="CreditCard border-1   font-[400] w-[100%] flex justify-between items-center  h-10 pl-5 focus:outline-0 px-4  mt-4 ">
                                <div className="Heading">
                                    Credit Card
                                </div>
                                <select className='' >
                                    <option >hlo</option>
                                </select>

                            </div>
                            <div className="CardDetails bg-gray-300/30 px-4">

                             

                                <div className="AdressBox mb-4 pt-4">
                                    <input type="text" placeholder='Card Number' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                                </div>

   <div className="AdressBox mb-4 mt-4 flex justify-between">
                                    <input type="text" placeholder='Expire Date' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                    <input type="text" placeholder='Security Code' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                </div>

                             <div className="AdressBox mb-4 mt-4">
                                    <input type="text" placeholder='Card Holder Name' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                                </div>
                                <div className="Tickeer flex items-baseline gap-2">
                                <div className="icons">  <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /></div>
                                <div className="text text-gray-400">Save this info for future</div>
                            </div>
                            </div>
               <div className="checkoutButton mt-6 bg-black text-white w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl">Checkout</div>
               <div className="Text text-[11px] mt-4 text-center">Copyright © 2022 FASCO . All Rights Reseved.</div>


                        </div>

                    </div>
                </div>

                <div className="MainBoxRIght  w-[50%] h-[40%]  flex justify-start  bg-gray-300/40">
                    <div className="DataBox w-[60%] h-[100%] flex flex-col gap-4  m-14 ">

                        <div className="Box1 flex items-center  ">
                          <div className="flex w-140">  <div className="image">  <img src="../Routes/Shop/Right/image1.png" className='w-25 h-30' alt="" srcset="" /></div>
                            <div className="data flex flex-col  justify-center pl-3  w-[70%]">
                                <div className="Line1 font-bold text-[12px] volkhov">Mini dress with ruffled straps</div>
                                <div className="Line2 text-gray-400 text-[12px] volkhov">Red</div>
                            </div></div>
                            <div className="price ml-30 text-end mt-2 text-gray-400 text-[12px] volkhov">$100.00</div>
                        </div>

                        <div className="Box2 flex justify-between ">
                            <div className="input  w-[78%] "><input type="text" placeholder='Discount code'  className='text-[13px] bg-white border-none  pl-4 w-[100%]  py-3 border-1'/></div>
                            <div className="btn  w-[20%]">
                            <div className="checkoutButton bg-black text-white  w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl text-[11px]">Apply</div>

                            </div>
                        </div>

                        <div className="Box3 flex flex-col gap-2">
                            <div className="Subtotal flex justify-between text-gray-600 text-[12px] ">
                                <div className="Line1">Subtotal</div>
                                <div className="Line2">$100.00</div>
                            </div>
                            <div className="Shipping flex justify-between text-gray-600 text-[12px] ">
                                 <div className="Line1">Shipping</div>
                                <div className="Line2">$40.00</div>
                            </div>
                            <div className="total flex justify-between text-gray-600 text-[12px] ">
                                 <div className="Line1">Total</div>
                                <div className="Line2 text-black">$140.00</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
<Main8/>
        </div>
    )
}

export default Checkout
