import React from 'react'
import Cart from './Cart'
import Main8 from '../../AllMains/Main8/Main8'


const ShoppingCart = () => {
    return (
        <div className="w-[100vw]  flex flex-col items-center">

            <div className='w-[75%]   flex flex-col gap-2'>
                <div className="Heading volkhov text-[25px] text-center">Shopping Cart</div>
                <div className="Links flex gap-2 self-center items-baseline">
                    <div className="Heading volkhov text-[10px] text-center">Home</div>
                    <img src='../Routes/Shop/image1.png' className='w-1 h-2  ' />
                    <div className="Heading volkhov text-[10px] text-center ">Your Shopping Cart</div>
                </div>
            </div>

<Cart/>

<Main8/>
        </div>
    )
}

export default ShoppingCart
