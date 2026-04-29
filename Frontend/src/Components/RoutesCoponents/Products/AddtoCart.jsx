import React, { useEffect, useState } from 'react'

import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { UserCart, UserData, UserOrder } from '../../../../Redux/User'
import axios from "axios"

const Cart = (props) => {
  const dispatch = useDispatch()
  const [Checked, setChecked] = useState(false)
  const[Nowwork,setNowwork]=useState(0)

  const sendingData=async()=>{
      try{
const CartSending=await axios.patch("http://localhost:3000/user/Cart",{},{withCredentials:true})
console.log("CartSending is ",CartSending.data)
setNowwork(Nowwork)
}
catch(err){
  console.log("CartSending is ",err)

}
  }
  useEffect(()=>{
sendingData()
  },[Nowwork])

  

  const userData = useSelector(state => state.User.User)
  // console.log("user data is ",userData[0].emailAddress)

  let percentage = (percent, price) => {
    return (percent / 100) * price
  }

     

  const addToCart = async () => {

    


      //  Email: Email,
      //     ProductQuantity: forsubtotal,
      //     Productid:props.Productid,
      //     ProductSize: Size,
      //     Color: Color,

     console.log("Email in AddtoCart is  ",props.Email)
        console.log("Size in AddtoCart is  ",props.Size)
        console.log("Color in AddtoCart is  ",props.Color)
        console.log("forsubtotal in AddtoCart is  ",props.forsubtotal)
        console.log("Productid in AddtoCart is  ",props.Productid)

    try {
      const CartSending = await axios.patch("http://localhost:3000/user/Cart",
         { 

          Email: props.Email,
          ProductSize:props.Size,
          Color:props.Color,
          ProductQuantity:props.forsubtotal,
          Productid:props.Productid,
          Wrap:Checked

        }, { withCredentials: true })
      console.log("Userdata from the Product Cart is ",props.UserCartData)
    }
    catch (err) {
      console.log("error while adding user cart ", err)
    }
  }


  return (
    <div className={`layer fixed  w-[100%] h-[100vh] bg-gray-500/40 top-0 z-100 left-0 ${!props.ishidden && "hidden"}`}>
      <div className='w-[500px] h-[100%] [@media(max-width:663px)]:w-[80%] absolute right-0 top-0 bg-white  px-6 flex flex-col justify-between'>
        <div className="Top mt-4">

          <div className="Box1 flex justify-between  ">
            <div className="Heading text-[25px] font-bold volkhov">Shopping Cart</div>
            <div className="Cross" onClick={() => { props.senddata() }}><img src="../Routes/Products/image18.png" className='w-3 h-3' alt="" srcset="" /></div>
          </div>

          <div className="Box2 text-gray-400">Buy <span className='font-bold text-black'>$122.35</span> more and get <span className='font-bold text-black'>free shipping</span></div>

          <div className="Box3 flex mt-8 mb-10 flex-wrap justify-center gap-6">

            <div className="ImageBox"><img src={`http://localhost:3000/Products/${props.ProductImage}`} className='w-[200px] h-[150px]' alt="" srcset="" /></div>

            <div className="DetailsBox pl-3 flex flex-col gap-1">

              <div className="Name font-bold volkhov">Denim Jacket</div>
              <div className="Color text-gray-400">Color : {props.Color}</div>
              <div className="Price font-bold volkhov">${((props.ProductPrice * props.forsubtotal) - percentage(props.AllData.ProductSale, (props.forsubtotal * props.ProductPrice)))}</div>
              <div className="Quantity flex w-30 h-10 bg-gray-500/50 border-1 border-gray-400 rounded items-center justify-around">
                <div className="Remove text-[17px]" onClick={() => { props.ChildDecrement() }}>-</div>
                <div className="AddRemoveNumber text-[14px]">{props.forsubtotal}</div>
                <div className="Add text-[17px]" onClick={() => { props.ChildIncrement() }}>+</div>
              </div>
            </div>
          </div>
          <hr className='border-1 border-gray-100 ' />

        </div>



        <div className="horizon w-[100%] h-1 boredr-1"></div>
        <div className="Bottom">
          <div className="Tickeer flex items-baseline gap-2">
            <div className="icons">
              {/* <img src="../Routes/Products/image19.png" className='w-3 h-3' alt="" srcset="" /> */}
              <input type="checkbox" onClick={(e) => { e.target.checked ? setChecked(true) : setChecked(false) }} />
            </div>
            <div className="text text-gray-400">For <span className='font-bold text-black font-bold'>$10.00</span> please wrap the product</div>
          </div>
          <hr className='border-1 border-gray-100 mb-8 mt-4' />
          <div className="Subtotal flex  justify-between font-bold">
            <div className="left">Subtotal</div>
            <div className="right">${((Checked ? ((props.ProductPrice * props.forsubtotal) + 10) : (props.ProductPrice * props.forsubtotal)) - percentage(props.AllData.ProductSale, (props.forsubtotal * props.ProductPrice)))}</div>
          </div>

          <Link to={"/Checkout"}
                          onClick={() => { dispatch(UserOrder({ data: { ProductBrand: props.ProductBrand,
                ProductName: props.ProductName,
                ProductPrice: (props.ProductPrice),
                ProductCategory: props.ProductCategory,
                ProductSale: props.ProductSale,
                ProductRating: props.ProductRating,
                ProductSize: props.Size,
                ProductColor: props.Color,

                ProductQuantity: props.forsubtotal,
                ProductStock: props.ProductStock,
                ProductReviews: props.ProductReviews,
                ProductImage:props.ProductImage,
                WrapChecked: Checked,} })) }} 
          className="checkoutButton mt-6 bg-black text-white w-[80%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl">
            Checkout
          </Link>

          <Link to={"/Cart"} onClick={() => {
            console.log("from cart is ", props.UserCartData),
            dispatch(UserCart({
              UserCartdata: {
                ProductBrand: props.ProductBrand,
                ProductName: props.ProductName,
                ProductPrice: (props.ProductPrice),
                ProductCategory: props.ProductCategory,
                ProductSale: props.ProductSale,
                ProductRating: props.ProductRating,
                ProductSize: props.Size,
                ProductColor: props.Color,

                ProductQuantity: props.forsubtotal,
                ProductStock: props.ProductStock,
                ProductReviews: props.ProductReviews,
                WrapChecked: Checked,
              }
            })),
            addToCart()
          }} className="ViewCart font-bold volkhov text-center pt-4 pb-4 underline">View Cart</Link>

        </div>
      </div>
    </div>
  )
}

export default Cart
