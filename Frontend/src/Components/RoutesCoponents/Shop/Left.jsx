import React from 'react'

const Left = () => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="Heading  volkhov text-[20px] h-7  ">
    Filters
</div>

<div className="DataBox pt-2">
    <div className="Size">
    <div className="Heading pt-4 pb-2 text-[14px] font-bold volkhov">Size</div>
    <div className="Content flex gap-2">
    <div className="Box w-8 h-8 rounded border-1 flex items-center justify-center text-[12px] border-gray-400 text-gray-400">S</div>
    <div className="Box w-8 h-8 rounded border-1 flex items-center justify-center text-[12px] border-gray-400 text-gray-400">M</div>
    <div className="Box w-8 h-8 rounded border-1 flex items-center justify-center text-[12px] border-gray-400 text-gray-400">L</div>
    <div className="Box w-8 h-8 rounded border-1 flex items-center justify-center text-[12px] border-gray-400 text-gray-400">Xl</div>
</div>
</div>

<div className="colors">
        <div className="Heading text-[14px] font-bold pt-4 pb-2">Colors</div>
    <div className="Content flex flex-col gap-2">
<div className="line1 flex gap-1">
    <div className="Box w-5 h-5 rounded-full  bg-pink-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-red-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-yellow-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-green-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-green-300 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-cyan-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full  bg-blue-400 flex items-center justify-center text-[12px]"></div>
</div>
<div className="line2 flex gap-1">
        <div className="Box w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-blue-400  flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-blue-300 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center text-[12px]"></div>
    <div className="Box w-5 h-5 rounded-full bg-red-400 flex items-center justify-center text-[12px]"></div>
</div>
</div>
</div>

<div className="Prices">
        <div className="Heading pt-4 pb-2 text-[14px] font-bold volkhov">Prices</div>
        <div className="Content">
            <div className="Line1 text-[13px]  text-gray-400">$0-$50</div>
            <div className="Line1 text-[13px]  text-gray-400">$50-$100</div>
            <div className="Line1 text-[13px]  text-gray-400">$100-$150</div>
            <div className="Line1 text-[13px]  text-gray-400">$150-$200</div>
            <div className="Line1 text-[13px]  text-gray-400">$300-$400</div>
        </div>

</div>

<div className="Brands">
        <div className="Heading pt-4 pb-2 text-[14px] font-bold volkhov">Brands</div>
        <div className="Content">
            <div className="Line1 text-[12px]  text-gray-400 flex gap-3"> 
                <div className="t1">Minimog</div>
                <div className="t1">Retrolie</div>
                <div className="t1">Brook</div>
              
            </div>
            <div className="Line1 text-[12px]  text-gray-400 flex gap-3"> 
                <div className="t1">Learts</div>
                <div className="t1">Vagabond</div>
                <div className="t1">Abby</div>
              
            </div>

        </div>
</div>

<div className="collections">
        <div className="Heading pt-4 pb-2 text-[14px] font-bold volkhov">Collections</div>
             <div className="Content">
            <div className="Line1 text-[13px]  text-gray-400">All products</div>
            <div className="Line1 text-[13px]  text-gray-400">Best sellers</div>
            <div className="Line1 text-[13px]  text-gray-400">New arrivals</div>
            <div className="Line1 text-[13px]  text-gray-400">Accessories</div>
        </div>

</div>

<div className="Tags">
        <div className="Heading pt-4 pb-2 text-[14px] font-bold volkhov">Tags</div>
              <div className="Content">
            <div className="Line1 text-[12px]  text-gray-400 flex gap-3"> 
                <div className="t1">Fashion</div>
                <div className="t1">Hats</div>
                <div className="t1">Sandal</div>
                <div className="t1">Belt</div>
                <div className="t1">Bags</div>
              
            </div>
            <div className="Line1 text-[12px]  text-gray-400 flex gap-3"> 
                <div className="t1">Snacker</div>
                <div className="t1">Denim</div>
                <div className="t1">Minimog</div>
                <div className="t1">Vagabond</div>
              
            </div>
            <div className="Line1 text-[12px]  text-gray-400 flex  gap-3"> 
                <div className="t1">Sunglasses</div>
                <div className="t1">Beachwear</div>
           
              
            </div>

        </div>

</div>
</div>

      </div>
  )
}

export default Left
