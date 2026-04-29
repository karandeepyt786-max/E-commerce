import React from 'react'

const ShopMain1 = () => {
  return (
    <div className='w-full py-10 flex flex-col items-center gap-2 bg-[#F9F9F9]'>
      <h1 className="text-3xl md:text-4xl font-bold volkhov text-[#484848]">Fashion</h1>
      <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
        <span className="cursor-pointer hover:text-black transition-colors">Home</span>
        <span className="text-gray-300">/</span>
        <span className="text-black font-medium">Fashion</span>
      </div>
    </div>
  )
}

export default ShopMain1
