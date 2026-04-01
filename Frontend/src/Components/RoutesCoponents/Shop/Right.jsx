import React from 'react'
import ProductBox from './ProductBox'


const Right = () => {
  return (
     <div className="Right w-[75%] h-[100%]  " >
<div className="Heading h-7  flex items-end justify-between  ">

    <div className="Left text-[12px] font-bold flex items-baseline gap-[3px] ">Best selling<img src='../Routes/Shop/image2.png'  className='w-2 h-2  '/>


</div>
    <div className="Right">
        <ul className='flex gap-2'>
            <li><img src="" alt="" srcset="../Routes/Shop/image3.png" className='w-5 h-5' /></li>
            <li><img src="" alt="" srcset="../Routes/Shop/image4.png" className='w-5 h-5' /></li>
            <li><img src="" alt="" srcset="../Routes/Shop/image5.png" className='w-5 h-5' /></li>
            <li><img src="" alt="" srcset="../Routes/Shop/image6.png" className='w-5 h-5' /></li>
            <li><img src="" alt="" srcset="../Routes/Shop/image7.png" className='w-5 h-5' /></li>
        </ul>
    </div>
</div>
<div className="DataBox w-[100%]  h-[100%] pt-6 flex flex-wrap justify-between ">
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>

 <div className="Numbering w-100 h-10  mx-auto  ">
        <div className="Counting flex items-center justify-center gap-2">
            <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center ">1</div>
            <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center ">2</div>
            <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center ">3</div>
            <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center "><img src="../Routes/Shop/Right/Slide.png " className='w-2 h-2' alt="" srcset="" /></div>
        </div>
    </div>
</div>
      </div>
  )
}

export default Right
