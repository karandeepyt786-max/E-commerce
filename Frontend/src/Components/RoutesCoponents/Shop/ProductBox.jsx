import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setSingleProduct } from '../../../../Redux/Admin'



const ProductBox = (props) => {
    const navigate=useNavigate()

    const dispatch=useDispatch()

    const Single=useSelector(state=>state.Admin.SingleProducts)


const OneProductGet = async (e) => {
  try {
    const response = await axios.post(
      "https://e-commerce-backend-2-zmoo.onrender.com/Admin/GetOneProduct",
      { ProductName: e.target.classList[0] },
      { withCredentials: true }
    );

    dispatch(setSingleProduct({ Product: response.data }));
    navigate("/Products")
  } catch (err) {
    console.log(err.message);
  }

  console.log("Clicked product:", e.target.classList[0]);
};

    return (
        <div className="group flex flex-col gap-3 cursor-pointer" onClick={(e)=>{OneProductGet(e)}}>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <div className={`${props.Productname} absolute inset-0 z-10 transition-colors group-hover:bg-black/5`}></div>
                <div className="w-full h-full flex items-center justify-center bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage:`url(https://e-commerce-backend-2-zmoo.onrender.com/Products/${props.ImageUrl})`}}>
                    {props.ProductStock === 0 && (
                        <div className="z-20 w-16 h-16 bg-black/60 rounded-full flex flex-col items-center justify-center text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                            <span>Sold</span>
                            <span>Out</span>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="flex flex-col gap-1 px-1">
                <h3 className="text-sm font-bold text-[#484848] truncate">{props.Productname}</h3>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">${props.ProductPrice}</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 border border-white shadow-sm"></div>
                        <div className="w-4 h-4 rounded-full bg-black border border-white shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBox
