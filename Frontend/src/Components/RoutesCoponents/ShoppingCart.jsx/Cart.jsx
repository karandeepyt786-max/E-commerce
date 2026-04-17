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

      <div className="Info1Box w-[75%]  ">
        <ul cla className='flex justify-between'>
          <li className='font-bold bg-black text-white p-1 px-2   '>Product</li>
          <li className='font-bold bg-black text-white p-1 px-2   text-center'>Price</li>
          <li className='font-bold bg-black text-white p-1 px-2   text-center '>Quantity</li>
          <li className='font-bold bg-black text-white p-1 px-2   text-center'>Total</li>
        </ul>
      </div>

      {
        CartData.Cart && CartData.Cart.map((ite, index) =>
        (

          <div className='w-[75%] h-auto flex flex-col '>
            <div className="top " onClick={() => { setHiddenIndex(index) }}>

              <hr className='mb-4 mt-4 border-gray-100 border-2' />

              <div className='w-[100%] h-32  flex '>

                <div className="Box1 w-83">
                  <div className="Box3 flex  ">
                    <div className="ImageBox"><img src={`http://localhost:3000/Products/${ite.ProductDataById
                      .ProductImage}`} className='w-25 h-32' alt="" srcset="" /></div>
                    <div className="DetailsBox pl-3 flex flex-col gap-1">
                      <div className="Name font-bold volkhov">{ite.ProductDataById
                        .ProductName} </div>
                      <div className="Color text-gray-400">Color : {ite.Color}</div>
                      <div className="Color text-gray-400 mt-2" onClick={() => { RemoveFromCart(ite) }} >Remove</div>
                    </div>
                  </div>
                </div>

                <div className="Box2 w-73">
                  <div className="Price font-bold volkhov">$
                    {Checked && 
                      ite.ProductDataById.ProductSale ?
                        percentageByPrice(Number(ite.ProductDataById.ProductSale), Number(ite.ProductDataById.ProductPrice),) :
                        ite.ProductDataById.ProductPrice }

                  </div>
                </div>

                <div className="Box3 w-80 ">
                  <div className="Quantity flex w-30 h-10  border-1 border-gray-400 rounded items-center justify-around">

                    <div className="Remove text-[17px]" onClick={(e) => { DecreaseQuantity(index) }}>-</div>

                    <div className="AddRemoveNumber text-[14px]"> {Checked ? Checked[index].ProductQuantity ? Checked[index].ProductQuantity : "" : ite.ProductQuantity}</div>

                    <div className="Add text-[17px] " onClick={() => { IncreaseQuantity(index) }}>+</div>

                  </div>
                </div>

                <div className="Box4 w-20 text-end">
                  <div className="Price font-bold volkhov">$

                    {Checked ? 
                     Checked[index].ProductQuantity ?ite.ProductDataById.ProductSale?

                      (Checked[index].Wrap ? 10 + percentage(
                        Number(ite.ProductDataById.ProductSale),
                        Number(ite.ProductDataById.ProductPrice),
                        Number(Checked[index].ProductQuantity)
                      ) : percentage(
                        Number(ite.ProductDataById.ProductSale),
                        Number(ite.ProductDataById.ProductPrice),
                        Number(Checked[index].ProductQuantity)
                      )) : ite.ProductDataById.ProductPrice*Checked[index].ProductQuantity:""
                      :
                      (ite.Wrap || (Checked && Checked[index].Wrap) ? 10 + percentage(
                        Number(ite.ProductDataById.ProductSale),
                        Number(ite.ProductDataById.ProductPrice),
                        Number(ite.ProductQuantity)
                      ) : percentage(
                        Number(ite.ProductDataById.ProductSale),
                        Number(ite.ProductDataById.ProductPrice),
                        Number(ite.ProductQuantity)
                      ))
                    }



                  </div>

                </div>

              </div>
              <div className="Boredr">
                <hr className='mb-4 mt-4 border-gray-100 self-end border-2' />
              </div>
            </div>

            <div className={`Bottom  w-120 self-end ${HiddenIndex === index ? "" : "hidden"}`}>
              {<div className="Tickeer flex items-baseline gap-2">





                <div className="icons"> <input checked={Checked ? Checked[index].Wrap : false} onChange={() => { CheckingData(index) }} type="checkbox" /> </div>




                <div className="text text-gray-400">For <span className='font-bold text-black font-bold'>$10.00</span> please wrap the product</div>






              </div>}
              <hr className='border-1 border-gray-100 mb-8 mt-4' />
              <div className="Subtotal flex  justify-between font-bold">
                <div className="left">Subtotal</div>
                <div className="right">$
                  {/* {Checked ? Checked[index].ProductQuantity ?

                    (ite.Wrap  || Checked[index].Wrap  ? 10 + percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(Checked[index].ProductQuantity)
                    ) : percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(Checked[index].ProductQuantity)
                    )) : ""
                    :
                    ((Checked && Checked[index].Wrap) ? 10 + percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(ite.ProductQuantity)
                    ) : percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(ite.ProductQuantity)
                    ))
                  } */}

                  {Checked ?
                   Checked[index].ProductQuantity?
                   (Checked[index].ProductQuantity && ite.ProductDataById.ProductSale)?
                  Checked[index].Wrap?10+
                     percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(Checked[index].ProductQuantity)
                    ):percentage(
                      Number(ite.ProductDataById.ProductSale),
                      Number(ite.ProductDataById.ProductPrice),
                      Number(Checked[index].ProductQuantity)
                    ): Checked[index].Wrap?10+(ite.ProductDataById.ProductPrice * Checked[index].ProductQuantity):(ite.ProductDataById.ProductPrice * Checked[index].ProductQuantity)
                   :0:0 }

                </div>
              </div>
              <Link to={"/Checkout"} onClick={() => { DispatchData(UserOrder({ data: Checked[index] })) }} className="checkoutButton mt-6 bg-black text-white w-[100%] h-10 flex items-center justify-center rounded mx-auto shadow-2xl">
                Checkout
              </Link>
              <div onClick={() => { sendingData() }} className="ViewCart font-bold volkhov text-center pt-4 pb-4 underline">View Cart</div>
            </div>
          </div>

        ))
      }


    </>
  )
}

export default Cart
