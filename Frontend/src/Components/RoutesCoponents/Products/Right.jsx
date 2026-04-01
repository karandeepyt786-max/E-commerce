import React from 'react'

const Right = () => {
  return (
    <div  className='w-[55%] h-[100%] flex flex-col '>
      <div className="Brand text-[12px] font-bold text-[#666666]">Fasco</div>

      <div className="Name flex justify-between">
        <div className="ItemName text-[20px] font-bold volkhov">Denim Jacket</div>
        <div className="Favourite border-1 border-gray-200 w-6 h-6 flex items-center justify-center rounded-full"><img src="../Routes/Products/image3.png" className='w-3 h-3 ' alt="" srcset="" /></div>
        </div>

        <div className="Rating flex items-center gap-1 mb-2">
          <div className="RatingItme flex">
            <img src="../Routes/Products/image4.png" className='w-3 h-3 ' alt="" srcset="" />
            <img src="../Routes/Products/image4.png" className='w-3 h-3 ' alt="" srcset="" />
            <img src="../Routes/Products/image4.png" className='w-3 h-3 ' alt="" srcset="" />
            <img src="../Routes/Products/image4.png" className='w-3 h-3 ' alt="" srcset="" />
            <img src="../Routes/Products/image3.png" className='w-3 h-3 ' alt="" srcset="" />
            </div>
          <div className="Numbering text-[12px]">(3)</div>
        </div>

        <div className="Price flex items-baseline gap-1 mb-3">
          <div className="RealPrice text-[17px] font-bold volkhov">$39.00</div>
          <div className="CutoffPrice text-[13px] font-[600] text-gray-400">$59.00</div>
          <div className="SavePrice text-[8px] bg-[#DA3F3F] text-white px-3 py-1 rounded-2xl">Save 33%</div>
        </div>

        <div className="Viewing flex items-baseline  gap-1 mb-4">
          <div className="Viewingicon "><img src="../Routes/Products/image6.png " className='w-3 h-3 ' alt="" srcset="" /></div>
          <div className="ViewingNumber text-[#8A8A8A]  text-[13px]">24 people are viewing this right now</div>
        </div>

        <div className="SalesTimer mb-3 flex border-1  border-[#F8CCCC] rounded p-2 justify-between bg-[#F8CCCC] text-[#FF706B] font-bold">
          <div className="SalesTimerText">Hurry up! Sale ends in:</div>
          <div className="SalesToe flex gap-3">
            <div className="Day">00</div>
            <div className="colon">:</div>
            <div className="Hours">05</div>
            <div className="colon">:</div>
            <div className="Minutes">59</div>
            <div className="colon">:</div>
            <div className="Seconds">47</div>
          </div>
        </div>

        <div className="LeftItemsFromStock flex flex-col gap-2 mb-4 ">
          <div className="LeftStockText text-[#8A8A8A]  text-[13px] flex gap-1">Only <div className="number font-bold">9</div> item(s) left in stock!</div>
          <div className="LeftStockRange">
            <div className="FullLine w-[100%] h-1 rounded bg-[#DEDEDE]">
              <div className="RangeLine  w-[5%] h-1 rounded bg-[#EF2D2D]"></div>
            </div>
          </div>
        </div>

        <div className="Size flex flex-col gap-2 mb-3">
          <div className="SizeText font-bold  text-[13px]">Size: M</div>
          <div className="SizeBoxes flex gap-2">
            <div className="box text-[13px] cursor-pointer font-bold border-1 w-7 h-7 flex items-center justify-center rounded border-gray-200 hover:bg-black   hover:text-white ">
              M
            </div>
            <div className="box text-[13px] cursor-pointer font-bold border-1 w-7 h-7 flex items-center justify-center rounded border-gray-200 hover:bg-black   hover:text-white">
                L
            </div>
            <div className="box text-[13px] cursor-pointer font-bold border-1 w-7 h-7 flex items-center justify-center rounded border-gray-200 hover:bg-black   hover:text-white ">
              XL
            </div>
            <div className="box text-[13px] cursor-pointer font-bold border-1 w-7 h-7 flex items-center justify-center rounded border-gray-200 hover:bg-black   hover:text-white ">
              XXL
            </div>
          </div>
        </div>

        <div className="Color mb-1">
          <div className="ColorText font-bold  text-[13px]">Color: Blue</div>
          <div className="ColorBoxes flex gap-2">

            <div className="ColorParent w-8 h-8 hover:border-1 cursor-pointer rounded-full flex items-center justify-center">
              <div className="ColorChild w-6 h-6 bg-blue-300 rounded-full"></div>
            </div>

            <div className="ColorParent w-8 h-8 hover:border-1 cursor-pointer rounded-full flex items-center justify-center">
              <div className="ColorChild w-6 h-6 bg-black rounded-full"></div>
            </div>

            <div className="ColorParent w-8 h-8 hover:border-1 cursor-pointer rounded-full flex items-center justify-center">
              <div className="ColorChild w-6 h-6 bg-pink-200 rounded-full"></div>
            </div>

          </div>
        </div>

        <div className="Qty flex flex-col gap-2">

<div className="QtyText font-bold  text-[13px]">Quantity</div>

        <div className="QtyAdd flex justify-between ">
            <div className="QtyAddRemove flex border-1  border-gray-300 w-30 justify-around rounded items-center   font-bold text-gray-500 ">
            <div className="Remove text-[17px]">-</div>
            <div className="AddRemoveNumber text-[14px]">1</div>
            <div className="Add text-[17px]">+</div>
          </div>
          <div className="AddToCartButton border-2 rounded volkhov w-[70%] h-10 flex items-center justify-center  font-bold  text-[13px] ">Add to cart</div>
        </div>
        </div>

        <div className="Help flex gap-10 mt-15 mb-2">
          
          <div className="Box1 flex gap-2 items-center ">
            <div className="icons"><img src="../Routes/Products/image7.png " className='w-4 h-4 ' alt="" srcset="" /></div>
            <div className="text font-[700]  text-[13px]">Compare</div>
          </div>

          <div className="Box1 flex gap-2  items-center">
            <div className="icons"><img src="../Routes/Products/image8.png " className='w-4 h-4 ' alt="" srcset="" /></div>
            <div className="text font-[700]  text-[13px]">Ask a question</div>
          </div>

          <div className="Box1 flex gap-2  items-center">
            <div className="icons"><img src="../Routes/Products/image9.png " className='w-4 h-4 ' alt="" srcset="" /></div>
            <div className="text font-[700]  text-[13px]">Share</div>
          </div>

        </div>

        <div className="horizontalLine border-1 border-gray-100"></div>

        <div className="OrderTimingDetail mt-5">

            <div className="Line flex gap-2">
              <div className="icons"><img src="../Routes/Products/image10.png " className='w-4 h-[17px] ' alt="" srcset="" /></div>
              <div className="Heading font-[700]  text-[13px]">Estimated Delivery:</div>
              <div className="Data">Jul 30 - Aug 03</div>
            </div>

            <div className="Line flex gap-2">
              <div className="icons"><img src="../Routes/Products/image11.png " className='w-4 h-[17px] ' alt="" srcset="" /></div>
              <div className="Heading font-[700]  text-[13px]">Free Shipping & Returns:</div>
              <div className="Data">On all orders over $75</div>
            </div>

        </div>

<div className="Box w-[100%] bg-[#F8F8F8] h-25 flex flex-col items-center justify-evenly mt-4">
    <div className="Brandsicons ">
<img src="../Routes/Products/image12.png " className='w-70 h-6 ' alt="" srcset="" />
    </div>
    <div className="FeedbackData font-[700]  text-[13px]">Guarantee safe & secure checkout</div>
</div>

    </div>
  )
}

export default Right
