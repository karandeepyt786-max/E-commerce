import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const Main4Products = (props) => {
  // console.log(Array.from({length:4}))
  

  let precentage = (percent, price) => {
    return (percent / 100) * price
  }


  return (
    <div className='w-70 h-90 rounded-2xl  flex flex-col items-center p-3 bg-white gap-3 relative '>
      <div className="ImageBox w-63 h-45 overflow-hidden rounded-2xl bg-green-300">
        <img src={props.ImageUrl || `http://localhost:3000/Products/${props.ProductImage}`} className='w-[100%] h-[100%]' alt="" srcset="" />
      </div>
      <div className="ContentBox flex w-[100%]  flex-col gap-3 mt-2 px-2">
        <div className="ContentBoxLine1 ">
          <div className="ContentBoxLine1Content1 flex items-center justify-between    ">
            <div className="ContentBoxLine1ContentHeading text-[#484848] font-bold ">{props.ProductName}</div>
            <div className="ContentBoxLine1ContentStart flex">
              {Array.from({ length: props.ProductRating }).map((_, i) => (
                <img className='w-4 h-4' src="../Main4/Stars.png" alt="" srcset="" />
              ))}

            </div>
          </div>
          {
            props.ProductBrand ? <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">{props.ProductBrand} </div> : <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">AI Karam </div>
          }
        </div>
        {props.ProductReviews ? <div className="ContentBoxLine2 text-[10px] font-medium text-[#484848]">{props.reviews} Customer Reviews</div> : <div className="ContentBoxLine2 text-[10px] font-medium text-[#484848]">31 Customer Reviews</div>}
        <div className="ContentBoxLine3   flex items-center justify-between">

          {/* {props.Offer ? <div className="flex items-end gap-2">
            <div className="ContentBoxLine3LeftContent text-[#484848] font-bold text-[20px] ">$50   </div>
            <strike className="ContentBoxLine3LeftContent text-gray-400 font-bold text-[19px] ">{props.Price}</strike>
          </div> : <div className="ContentBoxLine3LeftContent text-[#484848] font-bold text-2xl">{props.Price}</div>
          } */}

          {props.ProductSale ?
            <div className="flex items-center gap-2 self-start ">
              <div className="ContentBoxLine3LeftContent text-[#484848] font-bold text-[20px] ">${props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)}  </div>
              <strike className="ContentBoxLine3LeftContent text-gray-400 font-bold text-[19px] ">${props.ProductPrice}</strike>
            </div> : <div className="ContentBoxLine3LeftContent  text-[#484848] font-bold text-2xl">${props.ProductPrice}</div>
          }

          
         
          {
            props.ProductStock>10 ? 
            <div className="ContentBoxLine3RightContent text-[10px] text-white bg-green-500 border-1 px-2 py-1 rounded-2xl ">Stock Available</div>
            :props.ProductStock>0 && props.ProductStock<10?
            <div className="ContentBoxLine3RightContent text-[10px] text-white bg-red-500 border-1 px-2 py-1 rounded-2xl ">Almost Sold Out</div> 
            :<div className="ContentBoxLine3RightContent text-[10px] text-white bg-green-500 border-1 px-2 py-1 rounded-2xl ">No Stock Available</div>
          }


<IoIosAddCircle fill='rgb(34, 197, 94)' size={30} className='absolute right-13 top-[60%] ' />

        </div>
      </div>
    </div>
  )
}

export default Main4Products
