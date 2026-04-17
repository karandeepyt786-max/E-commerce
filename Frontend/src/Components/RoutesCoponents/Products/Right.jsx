import React, { useEffect, useState } from 'react'
import Cart from './AddtoCart'
import { useDispatch, useSelector } from 'react-redux'
import { UserCart, UserData } from '../../../../Redux/User'
import axios from "axios"


const Right = (props) => {
  const dispatch = useDispatch()

  const adminDataIs = useSelector(state => state.Admin.SingleProduct)
  const UserCartData = useSelector(state => state.User.UserCartData)
  const userData = useSelector(state => state.User.User)


  const [OpenCart, setOpenCart] = useState(false)
  const [Size, setSize] = useState(props && props.SizeAvailable[0])
  const [Color, setColor] = useState(props && props.ColorAvailable[0])
  const [forsubtotal, setforsubtotal] = useState(1)
  const[Email,setEmail]=useState("")


  const ChildIncrement = () => {
    setforsubtotal(forsubtotal + 1)
  }

  const ChildDecrement = () => {
    setforsubtotal((prev) => (prev > 1 ? prev - 1 : prev))
  }

  let precentage = (percent, price) => {
    return (percent / 100) * price
  }

  const childtoparent = () => {
    setOpenCart(!OpenCart)
  }

  const sendingData = async () => {
    try {
      const CartSending = await axios.patch("http://localhost:3000/user/Cart", {
         Email: Email,
          ProductQuantity: forsubtotal,
          Productid:props.Productid,
          ProductSize: Size,
          Color: Color,

      }, { withCredentials: true })
      console.log("Right user cart data is ", CartSending.data)
      console.log("user cart data is ", UserCartData)
    }
    catch (err) {
      console.log("Right user Cart Creation error ", err)
    }
  }

  const AddtoCart = async () => {


    console.log("UserCartData is ", UserCartData),
      dispatch(UserCart({
        UserCartdata: {
          ProductBrand: props.ProductBrand
          , ProductName: props.ProductName,
          ProductPrice: (props.ProductPrice * forsubtotal),
          ProductRating: props.ProductRating,
          ProductStock: props.ProductStock,
          ProductReviews: props.ProductReviews,
          ProductSize: Size,
          Color: Color,
          ProductQuantity: forsubtotal,
          ProductImage: props.ProductImage,
          SizeAvailable: props.SizeAvailable,
          ColorAvailable: props.ColorAvailable,
        }
      })),

      console.log("image from right is ",props.ProductImage)


      console.log("Brand is ", props.ProductBrand)
    setOpenCart(!OpenCart)
  }

    const isLogInOut = async () => {
    try {
      await axios.post("http://localhost:3000/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
        let resposeuserdata = data.data.data.emailAddress
        setEmail(resposeuserdata)
        console.log("loginout response ", resposeuserdata)
      })
    }
    catch (err) {
      console.log("loginout error ", err)
    }
  }

  useEffect(() => {
    isLogInOut()
  }, [])

  useEffect(() => {
    sendingData()
  }, [UserCartData])

  console.log("alldata and usercart data is here ",props.AllData,UserCartData)
  console.log("Product is from Right is ",props.Productid)


  return (
    <div className='w-[55%] h-[100%] flex flex-col '>

      <Cart
        AllData={props.AllData}
        UserCartData={UserCartData}
        ChildDecrement={() => { ChildDecrement() }}
        ChildIncrement={() => { ChildIncrement() }}
        ProductBrand={props.ProductBrand}
        ProductName={props.ProductName}
        ProductPrice={props.ProductPrice}
        forsubtotal={forsubtotal}
        ProductImage={props.ProductImage}
        ProductCategory={props.ProductCategory}
        ProductSale={props.ProductSale}
        senddata={childtoparent}
        ishidden={OpenCart}
        Size={Size}
        Color={Color}
        Productid={props.Productid}
        Email={Email}
         />

      <div className="Brand text-[12px] font-bold text-[#666666]">{props.ProductBrand}</div>

      <div className="Name flex justify-between">
        <div className="ItemName text-[20px] font-bold volkhov">{props.ProductName}</div>
        <div className="Favourite border-1 border-gray-200 w-6 h-6 flex items-center justify-center rounded-full"><img src="../Routes/Products/image3.png" className='w-3 h-3 ' alt="" srcset="" /></div>
      </div>

      <div className="Rating flex items-center gap-1 mb-2">
        <div className="RatingItme flex">

          {
            Array.from({ length: props.ProductRating }).map((ite) => (

              <img src="../Routes/Products/image4.png" className='w-3 h-3 ' alt="" srcset="" />

            ))
          }

          {
            Array.from({ length: 5 - props.ProductRating }).map((ite) => (

              <img src="../Routes/Products/image3.png" className='w-3 h-3 ' alt="" srcset="" />

            ))
          }
        </div>
        <div className="Numbering text-[12px]">({props.ProductRating})</div>
      </div>

      <div className="Price flex items-baseline gap-1 mb-3 ">
        <div className="RealPrice text-[17px] font-bold volkhov">${props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)}</div>
        {props.ProductSale > 0 &&
          <div className='flex gap-2'>
            <strike className="CutoffPrice text-[13px] font-[600] text-gray-400">${props.ProductPrice}</strike>
            <div className="SavePrice text-[8px] bg-[#DA3F3F] text-white px-3 py-1 rounded-2xl">Save {props.ProductSale}%</div>
          </div>}
      </div>

      <div className="Viewing flex items-baseline  gap-1 mb-4">
        <div className="Viewingicon "><img src="../Routes/Products/image6.png " className='w-3 h-3 ' alt="" srcset="" /></div>
        <div className="ViewingNumber text-[#8A8A8A]  text-[13px]">{props.ProductReviews} people are viewing this right now</div>
      </div>

      <div className="SalesTimer mb-3 flex border-1  border-[#F8CCCC] rounded p-2 justify-between bg-[#F8CCCC] text-[#FF706B] font-bold">
        <div className="SalesTimerText">Hurry up! Sale ends in:</div>
        <div className="SalesToe flex gap-3">
          <div className="Day">00</div>
          <div className="colon">:</div>
          <div className="Hours">05</div>
          <div className="colon">:</div>
          <div className="Minutes">59</div>
          <div className="colon">:</div>
          <div className="Seconds">47</div>
        </div>
      </div>

      <div className="LeftItemsFromStock flex flex-col gap-2 mb-4 ">
        <div className="LeftStockText text-[#8A8A8A]  text-[13px] flex gap-1">Only <div className="number font-bold">{props.ProductStock}</div> item(s) left in stock!</div>
        <div className="LeftStockRange">
          <div className="FullLine w-[100%] h-1 rounded bg-[#DEDEDE]">
            <div className="RangeLine  w-[5%] h-1 rounded bg-[#EF2D2D]"></div>
          </div>
        </div>
      </div>

      <div className="Size flex flex-col gap-2 mb-3">
        <div className="SizeText font-bold  text-[13px]">Size: {Size}</div>
        <div className="SizeBoxes flex gap-2">
          {
            props.SizeAvailable.map((ite) => (
              <div onClick={() => { setSize(ite) }} className={`box text-[13px] cursor-pointer font-bold border-1 w-7 h-7 flex items-center justify-center rounded border-gray-200 ${Size == ite && "text-white bg-black"} `}>
                {ite}
              </div>
            ))
          }


        </div>
      </div>

      <div className="flex  justify-between">
        <div className="Color mb-1">
          <div className="ColorText font-bold  text-[13px]">Color: {Color}</div>
          <div className="ColorBoxes flex gap-2">
            {
              props.ColorAvailable.map((ite) => (
                <div onClick={() => { setColor(ite) }} className={`ColorParent w-8 h-8 hover:border-1  cursor-pointer rounded-full flex items-center justify-center `}>
                  <div className={`ColorChild w-6 h-6 bg-${ite}-500 rounded-full`}></div>
                </div>

              ))

            }


          </div>
        </div>
        <div className="Subtotal">
          <div className='font-bold'>Subtotal</div>
          <div className="">${((props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)) * forsubtotal).toFixed(2)}</div>
        </div>
      </div>

      <div className="Qty flex flex-col gap-2">

        <div className="QtyText font-bold  text-[13px]">Quantity</div>

        <div className="QtyAdd flex justify-between ">
          <div className="QtyAddRemove flex border-1  border-gray-300 w-30 justify-around rounded items-center   font-bold text-gray-500 ">
            <div className="Remove text-[17px]" onClick={() => { setforsubtotal(prev => (prev > 1 ? prev - 1 : prev)); }}>-</div>
            <div className="AddRemoveNumber text-[14px]">{forsubtotal}</div>
            <div className="Add text-[17px]" onClick={() => { setforsubtotal(forsubtotal + 1) }}>+</div>
          </div>
          <div className="AddToCartButton border-2 rounded volkhov w-[70%] h-10 flex items-center justify-center  font-bold  text-[13px] " onClick={() => { AddtoCart() }}>Add to cart</div>
        </div>
      </div>

      <div className="Help flex gap-10 mt-15 mb-2">

        <div className="Box1 flex gap-2 items-center ">
          <div className="icons"><img src="../Routes/Products/image7.png " className='w-4 h-4 ' alt="" srcset="" /></div>
          <div className="text font-[700]  text-[13px]">Compare</div>
        </div>

        <div className="Box1 flex gap-2  items-center">
          <div className="icons"><img src="../Routes/Products/image8.png " className='w-4 h-4 ' alt="" srcset="" /></div>
          <div className="text font-[700]  text-[13px]">Ask a question</div>
        </div>

        <div className="Box1 flex gap-2  items-center">
          <div className="icons"><img src="../Routes/Products/image9.png " className='w-4 h-4 ' alt="" srcset="" /></div>
          <div className="text font-[700]  text-[13px]">Share</div>
        </div>

      </div>

      <div className="horizontalLine border-1 border-gray-100"></div>

      <div className="OrderTimingDetail mt-5">

        <div className="Line flex gap-2">
          <div className="icons"><img src="../Routes/Products/image10.png " className='w-4 h-[17px] ' alt="" srcset="" /></div>
          <div className="Heading font-[700]  text-[13px]">Estimated Delivery:</div>
          <div className="Data">Jul 30 - Aug 03</div>
        </div>

        <div className="Line flex gap-2">
          <div className="icons"><img src="../Routes/Products/image11.png " className='w-4 h-[17px] ' alt="" srcset="" /></div>
          <div className="Heading font-[700]  text-[13px]">Free Shipping & Returns:</div>
          <div className="Data">On all orders over $75</div>
        </div>

      </div>

      <div className="Box w-[100%] bg-[#F8F8F8] h-25 flex flex-col items-center justify-evenly mt-4">
        <div className="Brandsicons ">
          <img src="../Routes/Products/image12.png " className='w-70 h-6 ' alt="" srcset="" />
        </div>
        <div className="FeedbackData font-[700]  text-[13px]">Guarantee safe & secure checkout</div>
      </div>

    </div>
  )
}

export default Right
