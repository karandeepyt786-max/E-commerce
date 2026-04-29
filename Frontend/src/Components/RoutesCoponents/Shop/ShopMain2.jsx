import React from 'react'
import Left from './Left'
import Right from './Right'



const ShopMain2 = () => {
  return (
  <>
    <div className='w-[95%] lg:w-[85%] self-center mt-10 lg:mt-20 flex flex-col lg:flex-row gap-10 pb-20'>
      <div className="w-full lg:w-1/4">
        <Left/>
      </div>
      <div className="w-full lg:w-3/4">
        <Right/>
      </div>
    </div>
   
  </>
  )
}

export default ShopMain2
