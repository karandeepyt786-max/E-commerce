import axios from 'axios';
import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const Main4Products = (props) => {
const location=useLocation()

const[Sales,setSales]=useState(0)

  // console.log(Array.from({length:4}))
  

  let precentage = (percent, price) => {
    return (percent / 100) * price
  }

  const SaleSetter=async(e,key)=>{

    console.log("sale setter ",e,key)
    console.log(Sales)
    try{
   let response=  await  axios.post("https://e-commerce-backend-2-zmoo.onrender.com/Admin/AddSales",{id:key,Sales:Sales},{withCredentials:true})
  //  console.log(response.data)

    }
    catch(err){
      console.log(err.message)
    }

  }


  return (

    <div className='w-full max-w-[320px] rounded-2xl flex flex-col items-center p-4 bg-white shadow-sm hover:shadow-md transition-shadow gap-4 relative border border-gray-100'>
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <img src={props.ImageUrl || `https://e-commerce-backend-2-zmoo.onrender.com/Products/${props.ProductImage}`} className='w-full h-full object-cover' alt={props.ProductName} />
      </div>
      
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="text-[#484848] font-bold text-base truncate">{props.ProductName}</div>
          <div className="flex shrink-0">
            {Array.from({ length: props.ProductRating || 5 }).map((_, i) => (
              <img key={i} className='w-3 h-3' src="../Main4/Stars.png" alt="Star" />
            ))}
          </div>
        </div>

        <div className="text-[12px] text-[#8A8A8A]">
          {props.ProductBrand || "AI Karam"}
        </div>

        <div className="text-[12px] font-medium text-[#484848]">
          {props.ProductReviews || "31"} Customer Reviews
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-baseline gap-2">
            {props.ProductSale ? (
              <>
                <span className="text-[#484848] font-bold text-xl">
                  ${(props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)).toFixed(2)}
                </span>
                <strike className="text-gray-400 text-sm">
                  ${props.ProductPrice}
                </strike>
              </>
            ) : (
              <span className="text-[#484848] font-bold text-xl">${props.ProductPrice}</span>
            )}
          </div>
          
          {props.ProductStock > 10 ? (
            <span className="text-[10px] text-white bg-green-500 px-2 py-1 rounded-full">Stock Available</span>
          ) : props.ProductStock > 0 ? (
            <span className="text-[10px] text-white bg-orange-500 px-2 py-1 rounded-full">Low Stock</span>
          ) : (
            <span className="text-[10px] text-white bg-red-500 px-2 py-1 rounded-full">Out of Stock</span>
          )}
        </div>

        {location.pathname === "/AdminAllProducts" && (
          <div className='mt-4 flex items-center gap-2 border-t pt-4'>
            <input 
              type="number" 
              onChange={(e) => setSales(e.target.value)} 
              placeholder='Sale %' 
              className='text-[12px] border rounded px-2 py-1 w-full' 
            />
            <IoIosAddCircle 
              className="text-green-500 cursor-pointer shrink-0" 
              size={32} 
              onClick={(e) => SaleSetter(e, props.productKey)} 
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Main4Products
