import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main8 from '../../AllMains/Main8/Main8'

import { useDispatch, useSelector } from 'react-redux'
import { setSingleProduct } from '../../../../Redux/Admin'

const Checkout = () => {
    const DispatchOrder = useDispatch()
    const OrderData = useSelector(state => state.User.Order)
    const productidis = OrderData[0].ProductDataById
    console.log("OrderData from the checkout ", OrderData[0])
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



    const [Email, setEmail] = useState("")
    const [UnitedState, setUnitedState] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [Last, setLast] = useState("")
    const [Adress, setAdress] = useState("")
    const [City, setCity] = useState("")
    const [Postal, setPostal] = useState("")
    const [SaveForFuture, setSaveForFuture] = useState("")
    const [CreditCard, setCreditCard] = useState("")
    const [CardNumber, setCardNumber] = useState("")
    const [CardExpire, setCardExpire] = useState("")
    const [Security, setSecurity] = useState("")
    const [CardHolder, setCardHolder] = useState("")
    const [DiscountCode, setDiscountCode] = useState("")

    // console.log(Email, UnitedState, FirstName, Last, Adress, City, Postal, SaveForFuture,
    //     CreditCard, CardNumber, CardExpire, Security, CardHolder, DiscountCode
    // )




    console.log("Name is ", FirstName, " ", Last, " and adress is ", Adress)



    const UserAllInformation = {
        Email: Email,
        UnitedState: UnitedState,
        FirstName: FirstName,
        Last: Last,
        Adress: Adress,
        City: City,
        Postal: Postal,
        SaveForFuture: SaveForFuture,
        CreditCard: CreditCard,
        CardNumber: CardNumber,
        CardExpire: CardExpire,
        Security: Security,
        CardHolder: CardHolder,
        DiscountCode: DiscountCode
    }

    console.log(
        Email,
        UnitedState,
        FirstName,
        Last,
        Adress,
        City,
        Postal,
        SaveForFuture,
        CreditCard,
        CardNumber,
        CardExpire,
        Security,
        CardHolder,
        DiscountCode
    )


    const AddToOrder = async (e) => {
        e.preventDefault()
      
        try {
            const data = await axios.post("http://localhost:3000/user/Order", { UserAllInformation: UserAllInformation,ProductData:OrderData[0] }, { withCredentials: true })
            console.log("Add To Order ", data.data)
        }
        catch (err) {
            console.log("error while adding order is ", err)
        }
    }






    const SingleIs = useSelector(state => state.Admin.SingleProduct)

    const percentage = (percent, price, quantity) => {
        return (percent / 100) * (price * quantity)
    }
    const percentagePrice = (percent, price) => {
        return (percent / 100) * price
    }

    useEffect(() => {
        console.log("Single from cheekcout  ", SingleIs)
    })

    return (
        <div className='w-[calc(98vw+12px)] flex flex-col'>
            <div className="Heading volkhov text-[25px] text-center pb-6 w-[75%] self-center">FASCO Demo Checkout</div>
            <div className="MainBox w-[100%] h-[16  0vh] flex border-t-1 border-t-gray-300">

                <form onSubmit={(e) => {AddToOrder(e)}} className="MainBoxLeft  w-[50%] h-[100%] mr-7  flex justify-end">
                    <div className="DataBox w-[60%] h-[100%] ">

                        <div className="Contact">
                            <div className="Line1 flex justify-between">
                                <div className="Heading volkhov text-[25px] ">Contact</div>
                                <div className="Others">
                                    <span className='text-[10px] '>Have an account?</span> <span className='text-[10px] text-blue-400'>Create Account</span>
                                </div>
                            </div>
                            <div className="EmailBox mb-4 mt-4">
                                <input required name="Email" onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='Email Address' className='border-1 focus:outline-0  border-gray-400  text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                            </div>

                        </div>

                        <div className="Delivery">
                            <div className="Heading volkhov text-[25px] ">Delivery</div>
                            <select required onChange={(e) => { setUnitedState(e.target.value) }} name="UnitedState" className='border-1 border-gray-400  text-gray-600 font-[400] w-[100%] h-14 pl-5 focus:outline-0  mt-4 mb-4' >
                                {
                                    countries.map((ite) => (

                                        <option name="UnitedState" value={`${ite}`}>{ite}</option>
                                    ))
                                }
                            </select>
                            <div className="AdressBox mb-4 mt-4 flex justify-between">
                                <input required onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder='First Name' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                <input required onChange={(e) => { setLast(e.target.value) }} type="text" placeholder='Last Name' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                            </div>
                            <div className="AdressBox mb-4 mt-4">
                                <input type="text" required onChange={(e) => { setAdress(e.target.value) }} placeholder='Address' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                            </div>
                            <div className="AdressBox mb-4 mt-4 flex justify-between">
                                <input type="text" required onChange={(e) => { setCity(e.target.value) }} placeholder='City' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                <input type="text" required onChange={(e) => { setPostal(e.target.value) }} placeholder='Postal Code' className='border-1 border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                            </div>
                            <div className="Tickeer flex items-baseline gap-2">
                                <div className="icons">  <input onChange={(e) => { setSaveForFuture(e.target.checked) }} type="checkbox" /></div>
                                <div className="text text-gray-400">Save this info for future</div>
                            </div>
                        </div>

                        <div className="Payment mt-4  mb-4">
                            <div className="Heading volkhov text-[25px] ">Payment</div>
                            <div required className="CreditCard border-1   font-[400] w-[100%] flex justify-between items-center  h-10 pl-5 focus:outline-0 px-4  mt-4 ">
                                <div className="Heading">
                                    Credit Card
                                </div>
                                <select required onChange={(e) => { setCreditCard(e.target.value) }} name="option" className='' >
                                    <option name="Amazon Pay ICICI">Amazon Pay ICICI</option>
                                    <option name="SBI Cashback">SBI Cashback</option>
                                    <option name="Axis Bank ACE">Axis Bank ACE</option>
                                    <option name="Flipkart SBI">Flipkart SBI</option>
                                    <option name="HDFC Millennia">HDFC Millennia</option>
                                    <option name="HDFC Regalia">HDFC Regalia</option>
                                    <option name="ICICI Coral">ICICI Coral</option>
                                    <option name="IDFC FIRST Select">IDFC FIRST Select</option>
                                    <option name="Scapia Federal Bank">Scapia Federal Bank</option>
                                    <option name="Ixigo AU">Ixigo AU</option>
                                    <option name="HSBC RuPay Platinum">HSBC RuPay Platinum</option>
                                    <option name="Kotak811">Kotak811</option>
                                </select>

                            </div>
                            <div className="CardDetails bg-gray-300/30 px-4">



                                <div className="AdressBox mb-4 pt-4">
                                    <input required type="text" onChange={(e) => { setCardNumber(e.target.value) }} placeholder='Card Number' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                                </div>

                                <div className="AdressBox mb-4 mt-4 flex justify-between">
                                    <input required type="text" onChange={(e) => { setCardExpire(e.target.value) }} placeholder='Expire Date' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                    <input required type="text" onChange={(e) => { setSecurity(e.target.value) }} placeholder='Security Code' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[48%] h-14 pl-5' />
                                </div>

                                <div className="AdressBox mb-4 mt-4">
                                    <input required type="text" onChange={(e) => { setCardHolder(e.target.value) }} placeholder='Card Holder Name' className='border-1 bg-white border-gray-400 focus:outline-0   text-gray-600 font-[400] w-[100%] h-14 pl-5' />
                                </div>
                                <div className="Tickeer flex items-baseline gap-2">
                                    <div className="icons">  <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /></div>
                                    <div className="text text-gray-400">Save this info for future</div>
                                </div>
                            </div>
                            <input type="submit" className="checkoutButton mt-6 bg-black text-white w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl text-center" value={"Pay Now"} />
                            <div className="Text text-[11px] mt-4 text-center">Copyright © 2022 FASCO . All Rights Reseved.</div>


                        </div>

                    </div>
                </form>























                <div className="MainBoxRIght  w-[50%] h-[40%]  flex justify-start  bg-gray-300/40">
                    <div className="DataBox w-[60%] h-[100%] flex flex-col gap-4  m-14 ">

                        <div className="Box1 flex items-center  ">
                            <div className="flex w-140">  <div className="image">  <img src={`http://localhost:3000/Products/${productidis.ProductImage}`} className='w-25 h-30' alt="" srcset="" /></div>
                                <div className="data flex flex-col  justify-center pl-3  w-[70%]">
                                    <div className="Line1 font-bold text-[12px] volkhov">{productidis.ProductName}</div>
                                    <div className="Line2 text-gray-400 text-[12px] volkhov">Red</div>
                                </div></div>
                            <div className="price ml-30 text-end mt-2 text-gray-400 text-[12px] volkhov">${percentagePrice(productidis.ProductSale, productidis.ProductPrice)}</div>
                        </div>

                        <div className="Box2 flex justify-between ">
                            <div className="input  w-[78%] "><input onChange={(e) => { setDiscountCode(e.target.value) }} type="text" placeholder='Discount code' className='text-[13px] bg-white border-none  pl-4 w-[100%]  py-3 border-1' /></div>
                            <div className="btn  w-[20%]">
                                <div className="checkoutButton bg-black text-white  w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl text-[11px]">Apply</div>

                            </div>
                        </div>

                        <div className="Box3 flex flex-col gap-2">
                            <div className="Subtotal flex justify-between text-gray-600 text-[12px] ">
                                <div className="Line1">Subtotal</div>
                                <div className="Line2">${OrderData[0].Wrap ? 10 + percentage(productidis.ProductSale, productidis.ProductPrice, OrderData[0].ProductQuantity) : percentage(productidis.ProductSale, productidis.ProductPrice, OrderData[0].ProductQuantity)}</div>
                            </div>
                            <div className="Shipping flex justify-between text-gray-600 text-[12px] ">
                                <div className="Line1">Shipping</div>
                                <div className="Line2">$40.00</div>
                            </div>
                            <div className="total flex justify-between text-gray-600 text-[12px] ">
                                <div className="Line1">Total</div>
                                <div className="Line2 text-black">${OrderData[0].Wrap ? 10 + percentage(productidis.ProductSale, productidis.ProductPrice, OrderData[0].ProductQuantity) + 40 : percentage(productidis.ProductSale, productidis.ProductPrice, OrderData[0].ProductQuantity) + 40}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Main8 />
        </div>
    )
}

export default Checkout
