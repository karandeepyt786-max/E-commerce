import React from 'react'
import Main4Products from './Main4Products'

import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';

const Main4 = () => {






        const [products, setproducts] = useState([]);

    const GetAllProducts = async () => {
        try {
            const res = await axios.get("https://e-commerce-14z8.onrender.com/Admin/GetAllProducts/0/latest");
            setproducts(res.data);
            console.log("all products are ",res)
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        GetAllProducts();
    }, []); // ✅ only fetch once

    // ✅ separate effect to track data changes
    useEffect(() => {
        console.log("Updated products:", products);
    }, [products]);








    return (
    <div className='w-[95%] lg:w-[80%] flex flex-col items-center gap-8 pb-20 mt-20'>
        <div className="flex flex-col gap-5 items-center">
            <div className="text-[28px] sm:text-[36px] lg:text-[48px] volkhov text-[#484848] text-center">New Arrivals</div>
            <div className="text-[14px] sm:text-[16px] text-center max-w-[600px] text-[#8A8A8A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                <div className="px-6 py-2 text-[#8A8A8A] bg-[#FAFAFA] rounded-full border border-transparent hover:border-black hover:text-black transition-all cursor-pointer text-sm font-medium">Men's Fashion</div>
                <div className="px-6 py-2 text-[#8A8A8A] bg-[#FAFAFA] rounded-full border border-transparent hover:border-black hover:text-black transition-all cursor-pointer text-sm font-medium">Women's Fashion</div>
                <div className="px-6 py-2 text-[#8A8A8A] bg-[#FAFAFA] rounded-full border border-transparent hover:border-black hover:text-black transition-all cursor-pointer text-sm font-medium">Women Accessories</div>
                <div className="px-6 py-2 text-[#8A8A8A] bg-[#FAFAFA] rounded-full border border-transparent hover:border-black hover:text-black transition-all cursor-pointer text-sm font-medium">Men Accessories</div>
                <div className="px-6 py-2 text-[#8A8A8A] bg-[#FAFAFA] rounded-full border border-transparent hover:border-black hover:text-black transition-all cursor-pointer text-sm font-medium">Discount Deals</div>
            </div>
        </div>
     
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {
            products.map((ite, index)=>(
                <Main4Products key={index} {...ite} />
            ))
          }
        </div>
        <button className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
          View More
        </button>
    </div>
  )
}

export default Main4









// let ProductData=[
//     {
//         name:"Shiny",
//         rating:4,
//         reviews:"44.1",
//         Price:"$100",
//         stock:true,
//         Offer:"10%",
//         ImageUrl:"../Main4/image1.png"
//     },
//     {
//         name:"Long Dress",
//         rating:5,
//         reviews:"44.1",
//         Price:"$100",
//         stock:false,
//         Offer:"",
//         ImageUrl:"../Main4/image2.png"
//     },
//     {
//         name:"Full Sweater",
//         rating:3,
//         reviews:"44.1",
//         Price:"$50",
//         stock:true,
//         Offer:"",
//         ImageUrl:"../Main4/image3.png"
//     },
//     {
//         name:"White Dress",
//         rating:5,
//         reviews:"99.1",
//         Price:"$120",
//         stock:false,
//         Offer:"",
//         ImageUrl:"../Main4/image4.png"
//     },
//     {
//         name:"Colorfull Dress",
//         rating:5,
//         reviews:"44.1",
//         Price:"$500",
//         stock:true,
//         Offer:"",
//         ImageUrl:"../Main4/image5.png"
//     },
//     {
//         name:"White Shirt",
//         rating:5,
//         reviews:"44.1",
//         Price:"$100",
//         stock:false,
//         Offer:"10%",
//         ImageUrl:"../Main4/image6.png"
//     },
// ]
