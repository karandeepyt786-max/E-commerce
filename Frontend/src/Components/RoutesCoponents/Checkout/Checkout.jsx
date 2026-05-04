import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main8 from '../../AllMains/Main8/Main8'

import { useDispatch, useSelector } from 'react-redux'
import { setSingleProduct } from '../../../../Redux/Admin'
import Order from '../Order/Order'

const Checkout = () => {
    const DispatchOrder = useDispatch()
    const OrderData = useSelector(state => state.User.Order)

const datas=OrderData[0]?.ProductDataById?OrderData[0].ProductDataById:OrderData[0]



const productidis = OrderData[0]._id
console.log("data is the ",datas,' image is ',datas.ProductImage," the product id is the ",productidis)
console.log("oreder 0 is the ",OrderData[0].ProductDataById._id)
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

    const[TotalPrice,setTotalPrice]=useState(0)

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

    console.log("the data of userrallinformation is ",
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
    ," also user all information is the ",UserAllInformation," also the datas is the ",datas)
console.log("OrderData from the checkout ", (OrderData[0])," UserAllInformation is ",UserAllInformation)

    console.log("hlo")

    const AddToOrder = async (e) => {
        e.preventDefault()
      
        try {
            const data = await axios.post("https://e-commerce-14z8.onrender.com/user/Order", { UserAllInformation: UserAllInformation,ProductData:datas,productidis:productidis,Quantity:OrderData[0].ProductQuantity }, { withCredentials: true })
            console.log("Add To Order ", data.data)
        }
        catch (err) {   
            console.log(err.message)
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
        <div className='w-full min-h-screen bg-white'>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl volkhov text-center mb-10">FASCO Demo Checkout</h1>
                
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Section: Information Form */}
                    <form onSubmit={AddToOrder} className="w-full lg:w-[60%] flex flex-col gap-10">
                        <section className="flex flex-col gap-6">
                            <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                                <h2 className="text-xl sm:text-2xl volkhov">Contact</h2>
                                <p className="text-xs">
                                    <span className='text-gray-400'>Have an account?</span> <span className='text-blue-500 font-bold cursor-pointer'>Login</span>
                                </p>
                            </div>
                            <input required name="Email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address' className='w-full h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                        </section>

                        <section className="flex flex-col gap-6">
                            <h2 className="text-xl sm:text-2xl volkhov border-b border-gray-100 pb-2">Delivery</h2>
                            <select required onChange={(e) => setUnitedState(e.target.value)} name="UnitedState" className='w-full h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' >
                                {countries.map((ite) => (
                                    <option key={ite} value={ite}>{ite}</option>
                                ))}
                            </select>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input required onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                <input required onChange={(e) => setLast(e.target.value)} type="text" placeholder='Last Name' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                            </div>
                            <input type="text" required onChange={(e) => setAdress(e.target.value)} placeholder='Address' className='w-full h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" required onChange={(e) => setCity(e.target.value)} placeholder='City' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                <input type="text" required onChange={(e) => setPostal(e.target.value)} placeholder='Postal Code' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                            </div>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input onChange={(e) => setSaveForFuture(e.target.checked)} type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                                <span className="text-sm text-gray-500 font-medium">Save this info for future</span>
                            </label>
                        </section>

                        <section className="flex flex-col gap-6">
                            <h2 className="text-xl sm:text-2xl volkhov border-b border-gray-100 pb-2">Payment</h2>
                            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <div className="flex justify-between items-center bg-gray-50 px-6 py-4 border-b border-gray-100">
                                    <span className="font-bold">Credit Card</span>
                                    <select required onChange={(e) => setCreditCard(e.target.value)} className='bg-transparent text-sm font-medium focus:outline-none' >
                                        <option value="Amazon Pay ICICI">Amazon Pay ICICI</option>
                                        <option value="SBI Cashback">SBI Cashback</option>
                                        {/* ... other options */}
                                    </select>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <input required type="text" onChange={(e) => setCardNumber(e.target.value)} placeholder='Card Number' className='w-full h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input required type="text" onChange={(e) => setCardExpire(e.target.value)} placeholder='MM/YY' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                        <input required type="text" onChange={(e) => setSecurity(e.target.value)} placeholder='CVV' className='h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                    </div>
                                    <input required type="text" onChange={(e) => setCardHolder(e.target.value)} placeholder='Card Holder Name' className='w-full h-14 border border-gray-200 rounded-xl px-5 focus:border-black outline-none transition-colors' />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/20 active:scale-[0.98]">
                                Pay Now
                            </button>
                            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-2">Copyright © 2022 FASCO . All Rights Reserved.</p>
                        </section>
                    </form>

                    {/* Right Section: Order Summary */}
                    <div className="w-full lg:w-[40%]">
                        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 sticky top-24 flex flex-col gap-8">
                            <h3 className="text-xl volkhov">Order Summary</h3>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-24 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                                    <img 
                                      src={`https://e-commerce-14z8.onrender.com/Products/${datas.ProductImage}`} 
                                      className='w-full h-full object-cover' 
                                      alt="Product" 
                                    />
                                </div>
                                <div className="flex-grow flex flex-col gap-1">
                                    <div className="text-sm font-bold volkhov">{datas.ProductName}</div>
                                    <div className="text-xs text-gray-400">Color: Red</div>
                                    <div className="text-sm font-bold mt-1">
                                      ${datas.ProductSale ? percentagePrice(datas.ProductSale, datas.ProductPrice) : datas.ProductPrice}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <input onChange={(e) => setDiscountCode(e.target.value)} type="text" placeholder='Discount code' className='flex-grow h-12 bg-white border border-gray-200 rounded-xl px-4 text-sm focus:border-black outline-none' />
                                <button className="bg-black text-white px-6 rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors">Apply</button>
                            </div>

                            <div className="flex flex-col gap-3 pt-6 border-t border-gray-200">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Subtotal</span>
                                    <span className="font-bold">
                                      ${datas.ProductSale ?
                                        OrderData[0].Wrap ? 10 + percentage(datas.ProductSale, datas.ProductPrice, OrderData[0].ProductQuantity) :
                                        percentage(datas.ProductSale, datas.ProductPrice, OrderData[0].ProductQuantity) :
                                        OrderData[0].Wrap ? 10 + datas.ProductPrice * OrderData[0].ProductQuantity : datas.ProductPrice * OrderData[0].ProductQuantity}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Shipping</span>
                                    <span className="font-bold">$40.00</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-bold">

                                      ${datas.ProductSale ?
                                        OrderData[0].Wrap ? 10 + percentage(datas.ProductSale, datas.ProductPrice, OrderData[0].ProductQuantity) + 40 :
                                        percentage(datas.ProductSale, datas.ProductPrice, OrderData[0].ProductQuantity) + 40 :
                                        OrderData[0].Wrap ? 10 + (datas.ProductPrice * OrderData[0].ProductQuantity) + 40 :
                                        (datas.ProductPrice * OrderData[0].ProductQuantity) + 40}
                                        
                                      

                                      

                                    </span>
                                </div>
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
