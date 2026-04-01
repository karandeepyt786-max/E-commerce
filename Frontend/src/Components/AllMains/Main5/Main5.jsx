import React from 'react'

const Main5 = () => {
  return (
   <>
    <div className='w-[100%] h-90 overflow-hidden bg-amber-300  flex relative '>
       
            <img src="../Main5/image1.png" className='w-[55%] h-90' alt="" srcset="" />
   
    
                                    {/* <img className='absolute h-70 left-99 rotate-y-24 ' src="../Main5/image2.png" alt="" srcset="" /> */}
<div className="bo absolute border-1 h-100 left-[667px] rotate-18 top-[-10px] z-10" ></div>
     
     
                        {/* <img src="../Main5/image3.png " className='w-[55%] h-70 absolute right-0' alt="" srcset="" /> */}
                        <div style={{backgroundImage:"url('../Main5/image3.png')"}} className='w-[74%] h-90 absolute right-0'>
<div className="Contents w-[50%] absolute right-0 py-6 pr-30 flex flex-col gap-y-1">
    <div className="Title text-[#767676] text-[10px]">Women Collection</div>
    <div className="Heading text-[#484848] text-[26px] font-bold volkhov" >Peaky Blinders</div>
    <div className="Description text-[#000000] text-[11px] font-bold underline">DESCRIPTION</div>
    <div className="DescriptionData text-[#767676] text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis. </div>
    <div className="Size text-[#767676] flex text-[13px] gap-1">Size :  <div className="SizeBox text-white bg-black w-7 h-5 flex rounded  items-center justify-center text-[10px]">M</div></div>
    <div className="Price font-bold flex  text-[17px]">$100. <div className="smallPrice">00</div></div>
    <div className="BuyButton bg-black text-white text-[13px] w-23 h-8 flex items-center justify-center rounded">Buy Now</div>
</div>
                        </div>
                        

     
    </div>
    <div className="Services w-[100%] h-50  gap-6    top-40  flex justify-center py-5">
<div className="Box1 w-50 h-20 flex items-center justify-center ">
    <div className="icons flex gap-2 items-center justify-center">
        <img src="../Main5/image4.png" className='w-7 '  alt="" srcset="" />
        <div className="Content ">
            <div className="TopContent text-[14px] text-[#484848] font-medium">High Quality</div>
            <div className="BottomContent text-[10px] text-[#484848]">crafted from top materials</div>
        </div>
    </div>
</div>
<div className="Box1 w-50 h-20 flex items-center justify-center">
    <div className="icons flex gap-2 items-center justify-center">
        <img src="../Main5/image5.png" className='w-7 '  alt="" srcset="" />
        <div className="Content ">
            <div className="TopContent text-[14px] text-[#484848] font-medium">Warrany Protection</div>
            <div className="BottomContent text-[10px] text-[#484848]">Over 2 years</div>
        </div>
    </div>
</div>
<div className="Box1 w-50 h-20 flex items-center justify-center">
    <div className="icons flex gap-2 items-center justify-center">
        <img src="../Main5/image6.png" className='w-7 '  alt="" srcset="" />
        <div className="Content ">
            <div className="TopContent text-[14px] text-[#484848] font-medium">Free Shipping</div>
            <div className="BottomContent text-[10px] text-[#484848]">Order over 150 $</div>
        </div>
    </div>
</div>
<div className="Box1 w-50 h-20 flex items-center justify-center">
    <div className="icons flex gap-2 items-center justify-center">
        <img src="../Main5/image7.png" className='w-7 '  alt="" srcset="" />
        <div className="Content ">
            <div className="TopContent text-[14px] text-[#484848] font-medium">24 / 7 Support</div>
            <div className="BottomContent text-[10px] text-[#484848]">Dedicated support</div>
        </div>
    </div>
</div>

    </div>

    </>
  )
}

export default Main5
