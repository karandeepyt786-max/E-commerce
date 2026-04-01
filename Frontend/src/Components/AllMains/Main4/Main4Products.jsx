import React from 'react'

const Main4Products = (props) => {
    // console.log(Array.from({length:4}))
  return (
    <div className='w-70 h-90 rounded-2xl  flex flex-col items-center p-3 bg-white gap-3 '>
      <div className="ImageBox w-63 h-45 overflow-hidden rounded-2xl bg-green-300">
<img src={props.ImageUrl} alt="" srcset="" />
      </div>
      <div className="ContentBox flex w-[100%]  flex-col gap-3 mt-2 px-2">
        <div className="ContentBoxLine1 ">
            <div className="ContentBoxLine1Content1 flex items-center justify-between    ">
                <div className="ContentBoxLine1ContentHeading text-[#484848] font-bold ">{props.name}</div>
                <div className="ContentBoxLine1ContentStart flex">
                    {Array.from({ length: props.rating }).map((_, i) => (
 <img className='w-4 h-4' src="../Main4/Stars.png" alt="" srcset="" />
))}
         
                    </div>
            </div>
                <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">AI Karam</div>
        </div>
        <div className="ContentBoxLine2 text-[10px] font-medium text-[#484848]">({props.reviews}) Customer Reviews</div>
        <div className="ContentBoxLine3  flex items-end justify-between">

          {props.Offer? <div className="flex items-end gap-2">
            <div className="ContentBoxLine3LeftContent text-[#484848] font-bold text-[20px] ">$50   </div>
             <strike className="ContentBoxLine3LeftContent text-gray-400 font-bold text-[19px] ">{props.Price}</strike>
           </div>:            <div className="ContentBoxLine3LeftContent text-[#484848] font-bold text-2xl">{props.Price}</div>
}
            {
                props.stock?<div className="ContentBoxLine3RightContent text-[10px] text-white bg-green-500 border-1 px-2 py-1 rounded-2xl ">Stock Available</div>: <div className="ContentBoxLine3RightContent text-[10px]  text-white bg-red-500 border-1 px-2 py-1 rounded-2xl">Almost Sold Out</div>
            }
           
            
        </div>
      </div>
    </div>
  )
}

export default Main4Products
