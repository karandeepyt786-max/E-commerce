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

  const[Second,setSecond]=useState(60)
  const[Minute,setMinute]=useState(60)
  const[PrimeHour,setPrimeHour]=useState(60)
  const[Hours,setHours]=useState(PrimeHour)
const[HoursRound,setHoursRound]=useState(0)
  const[Days,setDays]=useState(PrimeHour  )


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
      const CartSending = await axios.patch("https://e-commerce-backend-2-zmoo.onrender.com/user/Cart", {
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
      console.log(err.message)
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
      await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
        let resposeuserdata = data.data.data.emailAddress
        setEmail(resposeuserdata)
        console.log("loginout response ", resposeuserdata)
      })
    }
    catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    isLogInOut()
  }, [])

  useEffect(() => {
    sendingData()
  }, [UserCartData])

useEffect(()=>{
setInterval(() => {

   setSecond((prev)=>(prev>0?prev-1:(setSecond(60),setMinute(prev=>prev>0?prev-1:(setMinute(60),(setHoursRound(prev=>prev+1)))))))

}, 1000)
},[])

useEffect(()=>{
setPrimeHour(prev=>prev-1)
  setDays( Math.floor(PrimeHour/24))
  setHours(prev=>prev>0?(PrimeHour-(Math.floor(PrimeHour/24)*24)):(prev=0))
},[HoursRound])




  return (
    <div className='w-full lg:w-[50%] flex flex-col gap-6'>
      <Cart
        AllData={props.AllData}
        UserCartData={UserCartData}
        ChildDecrement={ChildDecrement}
        ChildIncrement={ChildIncrement}
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

      <div className="flex flex-col gap-2">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{props.ProductBrand}</div>
        <div className="flex justify-between items-start">
          <h1 className="text-2xl sm:text-3xl font-bold volkhov text-[#484848] leading-tight">{props.ProductName}</h1>
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <img src="../Routes/Products/image3.png" className='w-4 h-4' alt="Wishlist" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <img 
              key={i} 
              src={i < props.ProductRating ? "../Routes/Products/image4.png" : "../Routes/Products/image3.png"} 
              className='w-4 h-4' 
              alt="Star" 
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 font-medium">({props.ProductReviews} reviews)</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-black">
          ${(props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)).toFixed(2)}
        </span>
        {props.ProductSale > 0 && (
          <div className='flex items-center gap-2'>
            <span className="text-lg text-gray-400 line-through">${props.ProductPrice}</span>
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Save {props.ProductSale}%
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600">
        <img src="../Routes/Products/image6.png" className='w-5 h-5' alt="Hot" />
        <p className="text-sm font-medium">{props.ProductReviews} people are viewing this right now</p>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex flex-col sm:flex-row justify-between gap-4">
        <span className="text-amber-800 font-bold text-sm">🔥 Hurry up! Sale ends in:</span>
        <div className="flex gap-4 text-amber-900 font-mono font-bold text-sm">
          <span>{Days}d</span><span>:</span><span>{Hours}h</span><span>:</span><span>{Minute}m</span><span>:</span><span>{Second}s</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 font-medium">Only <span className="text-black font-bold">{props.ProductStock}</span> items left!</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 border-y border-gray-100">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-gray-700">Select Size: <span className="text-black">{Size}</span></span>
          <div className="flex flex-wrap gap-2">
            {props.SizeAvailable.map((ite) => (
              <button 
                key={ite}
                onClick={() => setSize(ite)} 
                className={`w-10 h-10 rounded-xl text-sm font-bold border transition-all ${Size === ite ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}
              >
                {ite}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-gray-700">Select Color: <span className="text-black capitalize">{Color}</span></span>
          <div className="flex flex-wrap gap-3">
            {props.ColorAvailable.map((ite) => (
              <button 
                key={ite}
                onClick={() => setColor(ite)} 
                className={`w-8 h-8 rounded-full border-2 transition-all ${Color === ite ? 'border-black' : 'border-transparent'}`}
                style={{ backgroundColor: ite }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 sm:w-32">
            <button className="text-xl font-bold hover:text-black transition-colors" onClick={() => setforsubtotal(prev => (prev > 1 ? prev - 1 : prev))}>-</button>
            <span className="font-bold">{forsubtotal}</span>
            <button className="text-xl font-bold hover:text-black transition-colors" onClick={() => setforsubtotal(forsubtotal + 1)}>+</button>
          </div>
          <button 
            onClick={AddtoCart} 
            className="flex-grow bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95"
          >
            Add to cart — ${((props.ProductPrice - precentage(props.ProductSale, props.ProductPrice)) * forsubtotal).toFixed(2)}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        {[
          { img: "image7.png", label: "Compare" },
          { img: "image8.png", label: "Ask Question" },
          { img: "image9.png", label: "Share" }
        ].map(item => (
          <button key={item.label} className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-black transition-colors">
            <img src={`../Routes/Products/${item.img}`} className='w-4 h-4' alt={item.label} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-3 text-sm">
          <img src="../Routes/Products/image10.png" className='w-5 h-5' alt="Delivery" />
          <span className="text-gray-500 font-medium">Estimated Delivery: <span className="text-black font-bold">Jul 30 - Aug 03</span></span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <img src="../Routes/Products/image11.png" className='w-5 h-5' alt="Returns" />
          <span className="text-gray-500 font-medium">Free Shipping & Returns: <span className="text-black font-bold">On all orders over $75</span></span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col items-center gap-3">
          <img src="../Routes/Products/image12.png" className='h-6 opacity-60' alt="Payment Methods" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Guarantee safe & secure checkout</span>
        </div>
      </div>
    </div>
  )
}

export default Right
