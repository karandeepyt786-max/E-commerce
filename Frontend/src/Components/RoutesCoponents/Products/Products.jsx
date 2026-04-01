import React from 'react'
import Nav2 from '../Nav2'
import Left from "./Left"
import Right from "./Right"
import Cart from './Cart'


const Products = () => {

  return (
    <div className='flex flex-col w-screen content-center  '>
{/* <Cart/> */}
   <div className="MainBoxes flex  w-[73%] h-200 self-center ml-3 mt-10 justify-between">
<Left/>
<Right/>
   </div>
    </div>
  )
}

export default Products
