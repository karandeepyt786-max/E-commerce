import React from 'react'
import { UserData, Userstatus } from '../../../../Redux/User'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'


const Order = () => {

  const user = useSelector(state => state.User.User)
  const dispatch = useDispatch()
  const userData = useSelector(state => state.User.User)
  const [Email, setEmail] = useState("")
  const [OrderData, setOrderData] = useState([])

  

  // console.log("user is ", user[0].emailAddress)

  // console.log("the user email for product dekete is the ",userData[0].emailAddress)


  const isLogInOut = async () => {
    try {
      await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
        let resposeuserdata = data.data.data
        dispatch(UserData({ Details: resposeuserdata }))
        console.log("responsedata is ", resposeuserdata.emailAddress)
        setEmail(resposeuserdata.emailAddress)
        dispatch(Userstatus({ status: data.status }))
      })
    }
    catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    isLogInOut()
  }, [])

  console.log("Email is ", Email)


  const OrderGetter = async () => {

    if (user[0]) {
      try {
        const data = await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/OrderGetter", { Email: Email }, { withCredentials: true })
        console.log("ordergetter data is ", data.data)
        setOrderData(data.data)
      }
      catch (err) {
        console.log(err.message)
      }
    }

  }

  useEffect(() => {
    OrderGetter()
  }, [Email])

  const percentage = (sale, price, quantity) => {
    return (sale / 100) * (price * quantity)
  }


  const OrderDelete=async(data)=>{
  
    console.log("delete order ",data.product._id)
  const Orderdeleteis=  axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/OrderDelete",{deleteOrderid:data.product._id,UserOrderEmail:userData[0].emailAddress},{withCredentials:true})
  console.log("daleted response is the ",Orderdeleteis.data)
  }

// https://e-commerce-backend-2-zmoo.onrender.com/user/

  console.log("Ud is ", OrderData)

  return (
    <div className='w-full min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold volkhov text-[#484848] mb-10 text-center">Your Orders</h1>

        <div className='flex flex-wrap justify-center gap-8'>
          {OrderData && OrderData.map((ite, index) => (
            <div key={index} className='w-full max-w-[300px] bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow relative'>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={`https://e-commerce-backend-2-zmoo.onrender.com/Products/${ite.product.ProductImage}`}
                  className='w-full h-full object-cover'
                  alt={ite.product.ProductName}
                />
              </div>
cc{ite.ProductQuantity
}              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-[#484848] truncate pr-2">{ite.product.ProductName}</h3>
                  {ite.Wrap && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Wrapped</span>}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {ite.product.ProductBrand || "AI Karam"}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Order Status</span>
                  <span className="text-green-500 font-bold">Processing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">Total Amount</span>
                  <span className="text-black font-black text-xl">
                    ${ite.product.ProductSale ?
                      (ite.Wrap ?
                        10 + percentage(ite.product.ProductSale, ite.product.ProductPrice, ite.ProductQuantity) + 40 :
                        percentage(ite.product.ProductSale, ite.product.ProductPrice, ite.ProductQuantity) + 40) :
                      (ite.Wrap ?
                        10 + (ite.product.ProductPrice * ite.ProductQuantity) + 40 :
                        (ite.product.ProductPrice * ite.ProductQuantity) + 40)
                    }
                  </span>
                </div>
                <div onClick={()=>{OrderDelete(ite);OrderGetter()}} className="bg-red-500 text-white text-center py-2 w-50 self-center rounded my-2 hover:bg-red-500/90 cursor-pointer">Cancel Order</div>
              </div>
            </div>
          ))}
        </div>

        {(!OrderData || OrderData.length === 0) && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-medium">No orders found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Order
