import React, { useState } from 'react'

const Main7 = () => {
  const testimonials = [
    { img: "../Main7/image2.png", name: "Suzan B.", role: "UI Designer", text: "Items That I ordered were the best investment I ever made. I can't say enough about your quality service." },
    { img: "../Main7/image1.png", name: "James K.", role: "Traveler", text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!" },
    { img: "../Main7/image3.png", name: "Megen W.", role: "UI Designer", text: "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great." }
  ]

  const [activeIndex, setActiveIndex] = useState(1)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='w-full py-20 flex flex-col gap-8 items-center bg-[#FAFAFA] overflow-hidden'>
      <div className="flex flex-col gap-4 px-6 items-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl volkhov text-[#484848] text-center">This Is What Our Customers Say</div>
        <p className="text-sm text-center max-w-[600px] text-[#8A8A8A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
        </p>
      </div>

      <div className="w-full lg:w-[90%] max-w-[1400px] flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 py-10 px-4 min-h-[350px]">
        {testimonials.map((item, i) => {
          // const isActive = i === activeIndex
          // const isPrev = i === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)
          // const isNext = i === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)

          return (
            <div 
              key={i} 
              className={`bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col sm:flex-row gap-8 w-full max-w-[600px] transition-all duration-500 transform
                ${activeIndex==i ? 'scale-100 opacity-100 z-20 flex relative' : 'hidden lg:flex lg:scale-90 lg:opacity-40 lg:blur-[1px]'}`}
            >
              <div className="flex-shrink-0 flex justify-center items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-amber-400">
                  <img src={item.img} className='w-full h-full rounded-full object-cover' alt={item.name} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-amber-400 text-4xl font-serif">"</div>
                <p className="text-[#484848] text-sm sm:text-base font-medium italic leading-relaxed -mt-6">
                  {item.text}
                </p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <img key={j} className='w-3 h-3' src="../Main4/Stars.png" alt="Star" />
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xl font-bold text-[#484848] volkhov">{item.name}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A]">{item.role}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex gap-6 items-center">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90 group border border-gray-100"
        >
          <img src="../Main7/image5.png" className='w-5 h-5 group-hover:invert transition-all' alt="Prev" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${i === activeIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} 
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90 group border border-gray-100"
        >
          <img src="../Main7/image4.png" className='w-5 h-5 group-hover:invert transition-all' alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default Main7
