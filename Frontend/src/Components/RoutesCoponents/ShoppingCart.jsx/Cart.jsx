import React from 'react'
import Main8 from '../../AllMains/Main8/Main8'


const Cart = () => {
  return (
    <div className='w-[75%] h-[80vh] flex flex-col'>
      <div className="Info1Box ">
        <ul cla className='flex justify-between'>
          <li className='font-bold   '>Product</li>
          <li className='font-bold   text-center'>Price</li>
          <li className='font-bold   text-center '>Quantity</li>
          <li className='font-bold   text-center'>Total</li>
        </ul>
      </div>

<hr className='mb-4 mt-4 border-gray-100 border-2'/>

      <div className='w-[100%] h-32  flex '>

        <div className="Box1 w-83">
          <div className="Box3 flex  ">
            <div className="ImageBox"><img src="../Routes/Shop/Right/image1.png" className='w-25 h-32' alt="" srcset="" /></div>
            <div className="DetailsBox pl-3 flex flex-col gap-1">
              <div className="Name font-bold volkhov">Mini dress with <br /> ruffled straps</div>
              <div className="Color text-gray-400">Color : Red</div>
              <div className="Color text-gray-400 mt-2">Remove</div>
            </div>
          </div>
        </div>

        <div className="Box2 w-73">
          <div className="Price font-bold volkhov">$14.80</div>
        </div>

        <div className="Box3 w-80 ">
          <div className="Quantity flex w-30 h-10  border-1 border-gray-400 rounded items-center justify-around">
            <div className="Remove text-[17px]">-</div>
            <div className="AddRemoveNumber text-[14px]">1</div>
            <div className="Add text-[17px]">+</div>
          </div>
        </div>

        <div className="Box4 w-20 text-end">
          <div className="Price font-bold volkhov">$14.80</div>

        </div>

      </div>
   <div className="Boredr"> 
       <hr className='mb-4 mt-4 border-gray-100 self-end border-2'/>
   </div>

       <div className="Bottom w-120 self-end">
          <div className="Tickeer flex items-baseline gap-2">
            <div className="icons">  <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /></div>
            <div className="text text-gray-400">For <span className='font-bold text-black font-bold'>$10.00</span> please wrap the product</div>
          </div>
          <hr className='border-1 border-gray-100 mb-8 mt-4' />
          <div className="Subtotal flex  justify-between font-bold">
            <div className="left">Subtotal</div>
            <div className="right">$100.00</div>
          </div>
          <div className="checkoutButton mt-6 bg-black text-white w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl">
            Checkout
          </div>
          <div className="ViewCart font-bold volkhov text-center pt-4 pb-4 underline">View Cart</div>
        </div>
    </div>
  )
}

export default Cart
