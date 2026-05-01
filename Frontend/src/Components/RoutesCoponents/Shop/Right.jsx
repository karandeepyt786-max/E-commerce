import React from 'react'
import ProductBox from './ProductBox'
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Right = () => {

    const[Paramspage,setParamspage]=useState(0)

    const[Sorting,setSorting]=useState("")


    const [products, setproducts] = useState([]);

    const GetAllProducts = async (e) => {

     
     
        try {
                const res = await axios.get(`https://e-commerce-backend-2-zmoo.onrender.com/Admin/GetAllProducts/${Paramspage}/${ e?.target?.value?e.target.value:"latest"}`);
            setproducts(res.data);
        } catch (err) {
            console.log(err.message);
        }
    };

        const SortSubmit=async(e)=>{

const response=await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/Admin/SortingProduct",{sortBy:e.target.value})
set
        console.log("response for price is ",response.data)
      setproducts(response.data)
    }

    useEffect(() => {
        GetAllProducts();
    }, [Paramspage]); 

  



    return (
        <div className="w-full flex flex-col gap-6" >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-gray-100">
                <form className="w-full sm:w-auto">
                    <select 
                        onChange={(e)=>{GetAllProducts(e)}} 
                        name='Sorting' 
                        className="block w-full sm:w-[150px] text-sm font-bold bg-transparent border-0 focus:outline-none cursor-pointer"
                    >
                        <option value="latest">Latest</option>
                        <option value="popular">Popular</option>
                        <option value="sales">Sales</option>
                        <option value="high">High Price</option>
                        <option value="low">Low Price</option>
                    </select>
                </form>

                <div className="hidden sm:block">
                    <ul className='flex gap-3'>
                        {[3, 4, 5, 6, 7].map(num => (
                            <li key={num}>
                                <img src={`../Routes/Shop/image${num}.png`} alt="" className='w-5 h-5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-8">
                {
                  products && products.map((ite, index) => (
                        <ProductBox key={index} ProductStock={ite.ProductStock} Productname={ite.ProductName} ProductPrice={ite.ProductPrice} ImageUrl={ite.ProductImage} />
                    ))
                }
            </div>

            <div className="flex justify-center py-10 mt-auto">
                <div className="flex items-center gap-2">
                    {[0, 1, 2].map(page => (
                        <div 
                            key={page}
                            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${Paramspage === page ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                            onClick={() => setParamspage(page)}
                        >
                            {page + 1}
                        </div>
                    ))}
                    <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                        onClick={() => setParamspage(3)}
                    >
                        <img src="../Routes/Shop/Right/Slide.png" className='w-2 h-2' alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right
