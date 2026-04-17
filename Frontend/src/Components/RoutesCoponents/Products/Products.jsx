import React, { useEffect } from 'react'
import Nav2 from '../Nav2'
import Left from "./Left"
import Right from "./Right"
import Cart from './AddtoCart'
import { setSingleProduct } from '../../../../Redux/Admin'
import { useSelector } from 'react-redux'

const Products = () => {
const SingleIs = useSelector(state=>state.Admin.SingleProduct)
useEffect(()=>{
  console.log("Single is ",SingleIs._id
)
})
  return (
    <div className='flex flex-col w-screen content-center  '>
{/* <Cart/> */}

   <div className="MainBoxes flex  w-[73%] h-200 self-center ml-3 mt-10 justify-between">
<Left imgSrc={SingleIs.ProductImage}/>
<Right 
Productid={SingleIs._id}
AllData={SingleIs}
ProductName={SingleIs.ProductName}
 ProductPrice={SingleIs.ProductPrice}
  ProductRating={SingleIs.ProductRating}
   ProductReviews={SingleIs.ProductReviews}
    ProductStock={SingleIs.ProductStock}
     ProductCategory={SingleIs.ProductCategory}
      ProductBrand={SingleIs.ProductBrand}
       ProductSale={SingleIs.ProductSale}
       SizeAvailable={SingleIs.SizeAvailable}
       Tags={SingleIs.Tags}
       ColorAvailable={SingleIs.ColorAvailable}
       ProductImage={SingleIs.ProductImage}
        />
   </div>

    </div>
  )
}

export default Products
