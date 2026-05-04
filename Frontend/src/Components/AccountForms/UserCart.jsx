import React, { useEffect } from 'react'
import { UserData } from '../../../Redux/User'
import { useSelector } from 'react-redux'


const UserCart = () => {

    const UserCartData = useSelector(state => state.User.User)
    console.log(UserCartData[0].Cart)
    useEffect(() => {
        console.log("UserCartData is come ", UserCartData)
    }, [UserCartData])

      return (
    <div className='flex flex-wrap justify-center gap-6 p-6 sm:p-10 bg-gray-50 min-h-screen'>
      {UserCartData && UserCartData[0].Cart.map((ite, index) => (
        <div key={index} className='w-full max-w-[280px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow'>
          <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
            <img 
              src={`https://e-commerce-14z8.onrender.com/Products/${ite.ProductImage}`} 
              className='w-full h-full object-cover' 
              alt={ite.ProductName} 
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {ite.ProductBrand || "AI Karam"}
            </div>
            <h3 className="text-lg font-bold text-[#484848] truncate">{ite.ProductName}</h3>
          </div>
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
             <span className="text-black font-bold text-lg">${ite.ProductPrice}</span>
             <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-bold text-gray-500">Qty: {ite.ProductQuantity}</span>
          </div>
        </div>
      ))}
    </div>
      )



}

export default UserCart
