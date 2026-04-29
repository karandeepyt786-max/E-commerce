import React, { useEffect, useState } from 'react'
import Main8 from '../../AllMains/Main8/Main8'

import { useDispatch, useSelector } from 'react-redux'
import { setSingleProduct } from '../../../../Redux/Admin'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { UserOrder } from '../../../../Redux/User'


let Email = ""
const Cart = (props) => {

  const UserOrdersIs = useSelector(state => state.User.Order)
  console.log("user order is ",UserOrdersIs)
  const DispatchData = useDispatch()

  console.log("userorderis in the cart.jsx  ", UserOrdersIs)


  const [HiddenIndex, setHiddenIndex] = useState(0)
  const [Quantity, setQuantity] = useState(0)
  const [CartData, setCartData] = useState([])
  const [Checked, setChecked] = useState([])
  const [UpdatesChecked, setUpdatesChecked] = useState(false)
  const [Remove,setRemove]=useState(true)

  const SingleIs = useSelector(state => state.Admin.SingleProduct)

  // const UserCartData = useSelector(state => state.User.User)

  const isLogInOut = async () => {
    try {
      await axios.post("http://localhost:3000/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
        let resposeuserdata = data.data.data.emailAddress
        Email = resposeuserdata
        console.log("Email in sign ", Email)
      })
      sendingData()
    }
    catch (err) {
      console.log("loginout CartStart error ", err)
    }
  }

  const sendingData = async () => {
    try {
      const CartSending = await axios.post(`http://localhost:3000/user/CartGetter`, { Email: Email }, { withCredentials: true })
      setCartData(CartSending.data)
    }
    catch (err) {
      console.log("Cart user Cart Creation error ", err)
    }
  }

  let percentage = (percent, price, quantity) => {
    return (percent / 100) * (price * quantity);
  };

  let percentageByPrice = (percent, price) => {
    return (percent / 100) * price;
  };

  const CheckingData = async (inde) => {
    setChecked((prev) =>
      prev.map((ite, indexx) =>
        indexx === inde
          ? { ...ite, Wrap: !ite.Wrap }
          : ite
      )
    );

    setChecked((prev) => {

      const updated = [...prev] // or your new logic

      return updated
    })
  }

  const IncreaseQuantity = async (inde) => {
    setChecked((prev) =>
      prev.map((ite, indexx) =>
        indexx === inde
          ? { ...ite, ProductQuantity: ite.ProductQuantity + 1 }
          : ite
      )
    )
    console.log("Checked from Increase is ", Checked)
    console.log("index is the ", inde)
    console.log("CheckedQuantity from Increase is ", Checked[inde].ProductQuantity
    )
  }

  const DecreaseQuantity = async (inde) => {
    setChecked((prev) =>
      prev.map((ite, indexx) =>
        indexx === inde
          ? { ...ite, ProductQuantity: ite.ProductQuantity > 1 ? ite.ProductQuantity - 1 : ite.ProductQuantity }
          : ite
      )
    )
    console.log("Checked from Increase is ", Checked)
    console.log("index is the ", inde)
    console.log("CheckedQuantity from Increase is ", Checked[inde].ProductQuantity
    )

  }

  const RemoveFromCart = async (data) => {
    console.log("remove data ", data._id)
    setRemove(!Remove)

    try {
      await axios.delete(`http://localhost:3000/user/CartDelete`, { data: { Email: Email, ProductId: data._id }, withCredentials: true })

    }
    catch (err) {
      console.log("Cart user Cart Creation error ", err)
    }
  }

  const AddOrder = async (ind) => {

    console.log("Order index is ", ind, Checked[ind])
    try {
      const CartSending = await axios.post(`http://localhost:3000/user/Order`, { Email: Email, data: Checked[ind] }, { withCredentials: true })
      setCartData(CartSending.data)
    }
    catch (err) {
      console.log("Cart user Cart Creation error ", err)
    }
  }

  console.log(CartData.Cart)

  useEffect(() => {
    isLogInOut()
  }, [])

  useEffect(() => {
    console.log("Chnaged Quantity is ", Quantity)
  }, [Quantity])

  useEffect(() => {
    try {
      setChecked(CartData.Cart)
      let data = CartData.Cart.map((ite, ind) => (ite.Wrap))
    } catch (error) {
      console.log(error.message)
    }
  }, [CartData])

useEffect(()=>{
  sendingData()
},[Remove])

  // [{0:true},{1:false}]


  return (
    <>

      <div className="w-[95%] lg:w-[75%] mt-10">
        <div className="hidden sm:grid grid-cols-4 bg-black text-white p-4 rounded-t-xl text-sm font-bold uppercase tracking-wider">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {CartData.Cart && CartData.Cart.map((ite, index) => (
          <div key={index} className='w-full border-b border-gray-100 py-6'>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 items-center" onClick={() => setHiddenIndex(index)}>
              
              {/* Product Info */}
              <div className="flex gap-4 items-center">
                <img src={`http://localhost:3000/Products/${ite.ProductDataById.ProductImage}`} className='w-20 h-24 object-cover rounded-lg' alt={ite.ProductDataById.ProductName} />
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-[#484848] volkhov">{ite.ProductDataById.ProductName}</div>
                  <div className="text-xs text-gray-400">Color: {ite.Color}</div>
                  <button className="text-xs text-red-500 hover:underline mt-1 text-left w-max" onClick={(e) => { e.stopPropagation(); RemoveFromCart(ite); }}>Remove</button>
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between sm:justify-center items-center sm:text-center">
                <span className="sm:hidden text-xs font-bold text-gray-400 uppercase">Price</span>
                <div className="font-bold text-[#484848]">
                  ${ite.ProductDataById.ProductSale ? 
                    (ite.ProductDataById.ProductPrice - percentageByPrice(Number(ite.ProductDataById.ProductSale), Number(ite.ProductDataById.ProductPrice))).toFixed(2) : 
                    ite.ProductDataById.ProductPrice}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex justify-between sm:justify-center items-center">
                <span className="sm:hidden text-xs font-bold text-gray-400 uppercase">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-lg h-9 px-2 gap-4">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded" onClick={(e) => { e.stopPropagation(); DecreaseQuantity(index); }}>-</button>
                  <span className="text-sm font-medium w-4 text-center">{Checked ? (Checked[index]?.ProductQuantity || "") : ite.ProductQuantity}</span>
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded" onClick={(e) => { e.stopPropagation(); IncreaseQuantity(index); }}>+</button>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between sm:justify-end items-center sm:text-right">
                <span className="sm:hidden text-xs font-bold text-gray-400 uppercase">Total</span>
                <div className="font-bold text-[#484848]">
                  $ {Checked && Checked[index]?.ProductQuantity ? 
                    (Checked[index].ProductQuantity * (ite.ProductDataById.ProductSale ? (ite.ProductDataById.ProductPrice - percentageByPrice(Number(ite.ProductDataById.ProductSale), Number(ite.ProductDataById.ProductPrice))) : ite.ProductDataById.ProductPrice) + (Checked[index].Wrap ? 10 : 0)).toFixed(2) : 
                    "0.00"}
                </div>
              </div>
            </div>

            {/* Subtotal Section (Expandable) */}
            <div className={`mt-6 p-6 bg-gray-50 rounded-2xl flex flex-col gap-4 max-w-md ml-auto ${HiddenIndex === index ? "" : "hidden"}`}>
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300"
                  checked={Checked ? Checked[index]?.Wrap : false} 
                  onChange={() => { CheckingData(index) }} 
                />
                <span className="text-sm text-gray-600">For <span className='font-bold text-black'>$10.00</span> please wrap the product</span>
              </div>
              
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="font-bold text-[#484848]">Subtotal</span>
                <span className="font-bold text-xl text-black">
                  $ {Checked && Checked[index]?.ProductQuantity ? 
                    (Checked[index].ProductQuantity * (ite.ProductDataById.ProductSale ? (ite.ProductDataById.ProductPrice - percentageByPrice(Number(ite.ProductDataById.ProductSale), Number(ite.ProductDataById.ProductPrice))) : ite.ProductDataById.ProductPrice) + (Checked[index].Wrap ? 10 : 0)).toFixed(2) : 
                    "0.00"}
                </span>
              </div>

              <Link 
                to="/Checkout" 
                onClick={() => { DispatchData(UserOrder({ data: Checked[index] }));console.log("checked data is the ",Checked[index]) }} 
                className="w-full bg-black text-white py-3 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
              >
                Proceed to Checkout
              </Link>
              <button 
                onClick={() => { sendingData() }} 
                className="text-xs font-bold uppercase tracking-wider text-center hover:underline"
              >
                Refresh Cart
              </button>
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default Cart
