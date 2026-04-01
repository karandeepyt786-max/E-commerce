import React from 'react'

const Cart = () => {
  return (
    <div className="layer fixed  w-[197vh] h-[100vh] bg-gray-500/40 top-0 left-0 ">
      <div className='w-[35%] h-[100%] absolute right-0 bg-white  px-6 flex flex-col justify-between'>
        <div className="Top mt-4">

          <div className="Box1 flex justify-between  ">
            <div className="Heading text-[25px] font-bold volkhov">Shopping Cart</div>
            <div className="Cross"><img src="../Routes/Products/image18.png" className='w-3 h-3' alt="" srcset="" /></div>
          </div>

          <div className="Box2 text-gray-400">Buy <span className='font-bold text-black'>$122.35</span> more and get <span className='font-bold text-black'>free shipping</span></div>

          <div className="Box3 flex mt-8 mb-10 ">
            <div className="ImageBox"><img src="../Routes/Shop/Right/image1.png" className='w-25 h-32' alt="" srcset="" /></div>
            <div className="DetailsBox pl-3 flex flex-col gap-1">
              <div className="Name font-bold volkhov">Denim Jacket</div>
              <div className="Color text-gray-400">Color : Red</div>
              <div className="Price font-bold volkhov">$14.80</div>
              <div className="Quantity flex w-30 h-10 bg-gray-500/50 border-1 border-gray-400 rounded items-center justify-around">
                <div className="Remove text-[17px]">-</div>
                <div className="AddRemoveNumber text-[14px]">1</div>
                <div className="Add text-[17px]">+</div>
              </div>
            </div>
          </div>
          <hr className='border-1 border-gray-100 ' />

        </div>



        <div className="horizon w-[100%] h-1 boredr-1"></div>
        <div className="Bottom">
          <div className="Tickeer flex items-baseline gap-2">
            <div className="icons">  <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /></div>
            <div className="text text-gray-400">For <span className='font-bold text-black font-bold'>$10.00</span> please wrap the product</div>
          </div>
          <hr className='border-1 border-gray-100 mb-8 mt-4' />
          <div className="Subtotal flex  justify-between font-bold">
            <div className="left">Subtotal</div>
            <div className="right">$100.00</div>
          </div>
          <div className="checkoutButton mt-6 bg-black text-white w-[80%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl">
            Checkout
          </div>
          <div className="ViewCart font-bold volkhov text-center pt-4 pb-4 underline">View Cart</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
