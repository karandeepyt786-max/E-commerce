import React from 'react'
import Main4Products from '../AllMains/Main4/Main4Products'

import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import ChangeSales from './ChangeSales';


const AdminAllProducts = () => {
        const [products, setproducts] = useState([]);

    const GetAllProducts = async () => {
        try {
            const res = await axios.get("https://e-commerce-14z8.onrender.com/Admin/GetAllProducts/1/latest");
            setproducts(res.data);
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
    <div className='flex flex-wrap justify-center'>
        <ChangeSales/>
        {
            products.map((ite)=>(

                <Main4Products productKey={ite._id} ProductPrice={ite.ProductPrice} ProductSale={ite.ProductSale} ProductStock={ite.ProductStock} ProductReviews={ite.ProductReviews} ProductBrand={ite.ProductBrand} ProductImage={ite.ProductImage} ProductName={ite.ProductName}/>
            ))
        }



    </div>
  )
}

export default AdminAllProducts
