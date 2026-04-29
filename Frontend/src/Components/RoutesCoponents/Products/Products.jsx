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
    <div className='w-full min-h-screen bg-white'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
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
    </div>
  )
}

export default Products
