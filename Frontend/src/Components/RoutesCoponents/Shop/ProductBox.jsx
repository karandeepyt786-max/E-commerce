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
      "http://localhost:3000/Admin/GetOneProduct",
      { ProductName: e.target.classList[0] },
      { withCredentials: true }
    );

    dispatch(setSingleProduct({ Product: response.data }));
    navigate("/Products")
  } catch (err) {
    console.log("Get One Product Error", err);
  }

  console.log("Clicked product:", e.target.classList[0]);
};

    return (
        <div className="Container w-55 h-90 relative  cursor-pointer"  onClick={(e)=>{OneProductGet(e)}}>
            <div className={`${props.Productname} topLayer  absolute w-[100%]  h-[95%] `} ></div>

            <div className="image w-[100%] h-[80%] flex items-center justify-center " style={{backgroundImage:`url(http://localhost:3000/Products/${props.ImageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}  >
            <div className="SolOutBox w-15 h-15 bg-gray-400 rounded-full flex items-center justify-center flex-col text-white font-extrabold leading-4">
<span>Sold</span> <span>Out</span>
            </div>
             </div>
            <div className="DetailBox flex flex-col gap-1 pt-2">
                <div className="Heading text-[13px] font-bold">{props.Productname}</div>
                <div className="Price text-[10px] ">${props.ProductPrice}{Single}</div>
                <div className="Color flex gap-2 pt-1 ">

                    <div className="pra hover:border-1 h-6 w-6 flex items-center justify-center rounded-full">
                        <div className="color1 h-4 w-4  rounded-full bg-yellow-400">
                        </div>
                        
                    </div>
                    <div className="pra hover:border-1 h-6 w-6 flex items-center justify-center rounded-full">
                        <div className="color1 h-4 w-4  rounded-full bg-black">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBox
