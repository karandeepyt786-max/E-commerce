import React from 'react'
import { UserData, Userstatus } from '../../../../Redux/User'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'


const Order = () => {

    const user = useSelector(state => state.User.User)
    const dispatch = useDispatch()
    const userData = useSelector(state => state.User.User)
    const [Email, setEmail] = useState("")
    const [OrderData, setOrderData] = useState([])

    // console.log("user is ", user[0].emailAddress)



    const isLogInOut = async () => {
        try {
            await axios.post("http://localhost:3000/user/isLoginOut", {}, { withCredentials: true }).then((data) => {
                let resposeuserdata = data.data.data
                dispatch(UserData({ Details: resposeuserdata }))
                console.log("responsedata is ", resposeuserdata.emailAddress)
                setEmail(resposeuserdata.emailAddress)
                dispatch(Userstatus({ status: data.status }))
            })
        }
        catch (err) {
            console.log("loginout error ", err)
        }
    }

    useEffect(() => {
        isLogInOut()
    }, [])

    console.log("Email is ", Email)


    const OrderGetter = async () => {

        if (user[0]) {
            try {
                const data = await axios.post("http://localhost:3000/user/OrderGetter", { Email: Email }, { withCredentials: true })
                console.log("ordergetter data is ", data.data)
                setOrderData(data.data)
            }
            catch (err) {
                console.log('oredrgetter error is ', err)
            }
        }

    }

    useEffect(() => {
        OrderGetter()
    }, [Email])

    const percentage=(sale,price,quantity)=>{
        return (sale/100)*(price*quantity)
    }


    console.log("Ud is ", OrderData)

    return (
        <div className='flex items-center justify-center'>
            <div className='w-[75%]  h-screen flex justify-around flex-wrap'>
            {
                OrderData && OrderData.map((ite, inde) => (
                    <div className='w-70 h-90 rounded-2xl  flex flex-col items-center p-3 bg-white gap-3 relative '>



                        <div className="ImageBox w-63 h-45 overflow-hidden rounded-2xl bg-green-300">
                            <img src={`http://localhost:3000/Products/${ite.product
                                .ProductImage}`} className='w-[100%] h-[100%]' alt="" srcset="" />
                        </div>
                        <div className="ContentBox flex w-[100%]  flex-col gap-3 mt-2 px-2">
                            <div className="ContentBoxLine1 ">
                                <div className="ContentBoxLine1Content1 flex items-center justify-between    ">
                                    <div className="ContentBoxLine1ContentHeading text-[#484848] font-bold ">{ite.product.ProductName}</div>

                                </div>
                                {
                                    ite.product.ProductBrand ? <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">{ite.product.ProductBrand} </div> : <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">AI Karam </div>
                                }
                            </div>
                            <div className='flex justify-between'>
<div className="total">Total</div>
<div className="totalPrice">${
    ite.product.ProductSale?
percentage(ite.product.ProductSale
,ite.product.ProductPrice,ite.ProductQuantity):(ite.product.ProductPrice*ite.ProductQuantity)
}

</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Order
