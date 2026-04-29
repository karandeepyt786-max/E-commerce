import React from 'react'

const Main5 = () => {
  return (
   <>
    <div className='w-full flex flex-col md:flex-row bg-[#F5F5F5] overflow-hidden'>
      <div className='w-full md:w-1/2 h-[300px] md:h-[500px]'>
        <img src="../Main5/image1.png" className='w-full h-full object-cover' alt="Collection" />
      </div>
      <div className='w-full md:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-4'>
        <div className="text-[#767676] text-sm uppercase tracking-wider">Women Collection</div>
        <div className="text-[#484848] text-3xl md:text-4xl lg:text-5xl font-bold volkhov">Peaky Blinders</div>
        <div className="text-[#000000] text-sm font-bold underline cursor-pointer">DESCRIPTION</div>
        <p className="text-[#767676] text-sm leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
        </p>
        <div className="flex items-center gap-3 text-sm text-[#767676]">
          Size : <span className="bg-black text-white px-3 py-1 rounded text-xs">M</span>
        </div>
        <div className="text-2xl font-bold">$100.00</div>
        <button className="bg-black text-white px-8 py-3 rounded-md w-max hover:bg-gray-800 transition-colors">
          Buy Now
        </button>
      </div>
    </div>

    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-16 bg-white border-t">
      {[
        { img: "../Main5/image4.png", title: "High Quality", desc: "crafted from top materials" },
        { img: "../Main5/image5.png", title: "Warranty Protection", desc: "Over 2 years" },
        { img: "../Main5/image6.png", title: "Free Shipping", desc: "Order over $150" },
        { img: "../Main5/image7.png", title: "24 / 7 Support", desc: "Dedicated support" }
      ].map((service, i) => (
        <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <img src={service.img} className='w-10 h-10 object-contain' alt={service.title} />
          <div>
            <div className="text-base font-semibold text-[#484848]">{service.title}</div>
            <div className="text-xs text-[#8A8A8A]">{service.desc}</div>
          </div>
        </div>
      ))}
    </div>

    </>
  )
}

export default Main5
