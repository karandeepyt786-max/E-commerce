import React, { useEffect } from 'react'
import { UserData } from '../../../Redux/User'
import { useSelector } from 'react-redux'


const UserCart = () => {

    const UserCartData = useSelector(state => state.User.User)
    console.log(UserCartData[0].Cart)
    useEffect(() => {
        console.log("UserCartData is come ", UserCartData)
    }, [UserCartData])

      return (
        <div className='flex'>
            {
               UserCartData && UserCartData[0].Cart.map((ite)=>(

                  <div className='w-70 h-90 rounded-2xl  flex flex-col items-center p-3 bg-white gap-3 relative '>



            <div className="ImageBox w-63 h-45 overflow-hidden rounded-2xl bg-green-300">
                <img src={`http://localhost:3000/Products/${ite.ProductImage}`} className='w-[100%] h-[100%]' alt="" srcset="" />
            </div>
            <div className="ContentBox flex w-[100%]  flex-col gap-3 mt-2 px-2">
                <div className="ContentBoxLine1 ">
                    <div className="ContentBoxLine1Content1 flex items-center justify-between    ">
                        <div className="ContentBoxLine1ContentHeading text-[#484848] font-bold ">{ite.ProductName}</div>

                    </div>
                    {
                        ite.ProductBrand ? <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">{ite.ProductBrand} </div> : <div className="ContentBoxLine1Content2 text-[10px] text-[#8A8A8A]">AI Karam </div>
                    }
                </div>

            </div>
        </div>
                 
               )) 
            }
        </div>
      )



}

export default UserCart
