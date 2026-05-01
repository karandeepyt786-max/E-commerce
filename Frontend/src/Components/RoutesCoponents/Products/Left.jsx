import React from 'react'

const Left = (props) => {
  return (
    <div className='w-full lg:w-[45%] flex flex-col-reverse lg:flex-row gap-4'>
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar py-2 lg:py-0 hidden">
        {[1, 2, 13, 14, 15, 16, 17].map((num) => (
          <div key={num} className="flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-xl border border-gray-100 hover:border-black transition-colors cursor-pointer flex items-center justify-center bg-gray-50 overflow-hidden">
            <img src={`../Routes/Products/image${num}.png`} className='w-full h-full object-cover' alt={`Thumbnail ${num}`} />
          </div>
        ))}
      </div>
      <div className="flex-grow bg-gray-50 rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
        <img 
          src={`https://e-commerce-backend-2-zmoo.onrender.com/Products/${props.imgSrc}`} 
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-500' 
          alt="Main Product" 
        />
      </div>
    </div>
  )
}

export default Left
