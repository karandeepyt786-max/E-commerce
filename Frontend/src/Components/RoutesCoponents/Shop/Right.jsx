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
                const res = await axios.get(`http://localhost:3000/Admin/GetAllProducts/${Paramspage}/${ e?.target?.value?e.target.value:"latest"}`);
            setproducts(res.data);
        } catch (err) {
            console.log("GetAllProducts error ", err);
        }
    };

        const SortSubmit=async(e)=>{

const response=await axios.post("http://localhost:3000/Admin/SortingProduct",{sortBy:e.target.value})
set
        console.log("response for price is ",response.data)
      setproducts(response.data)
    }

    useEffect(() => {
        GetAllProducts();
    }, [Paramspage]); 

  



    return (
        <div className="Right w-[75%] h-[190vh]  relative  " >
            <div className="Heading h-7  flex items-end justify-between  ">


<form >
  {/* <label for="underline_select" class="sr-only">Underline select</label> */}
  <select onChange={(e)=>{GetAllProducts(e)}} name='Sorting'  style={{fontWeight:"700"}} id="underline_select" class="block w-[130px] text-sm text-body bg-transparent border-0  border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer">
      <option value="latest" selected className='text-[10px] ' > Latest </option>
      <option value="popular" >Popular</option>
      <option value="sales" >Sales</option>
      <option value="high" >Hight price</option>
      <option value="low" >low price</option>
  </select>
  
</form>



                {/* <select name="Sorting" id="Sort">

                <option className="Left text-[10px] font-bold flex items-baseline gap-[3px] ">Best selling<img src='../Routes/Shop/image2.png' className='w-2 h-2  ' />
                </option>
                </select> */}



                <div className="Right ">
                    <ul className='flex gap-2'>
                        <li><img src="" alt="" srcset="../Routes/Shop/image3.png" className='w-5 h-5' /></li>
                        <li><img src="" alt="" srcset="../Routes/Shop/image4.png" className='w-5 h-5' /></li>
                        <li><img src="" alt="" srcset="../Routes/Shop/image5.png" className='w-5 h-5' /></li>
                        <li><img src="" alt="" srcset="../Routes/Shop/image6.png" className='w-5 h-5' /></li>
                        <li><img src="" alt="" srcset="../Routes/Shop/image7.png" className='w-5 h-5' /></li>
                    </ul>
                </div>
            </div>
            <div className="DataBox w-[100%]  h-[175vh] overflow-hidden pt-6 flex flex-wrap justify-between  gap-y-8 relative z-0">

                {
                  products &&  products.map((ite, index) => (

                        <ProductBox ProductStock={ite.ProductStock} Productname={ite.ProductName} ProductPrice={ite.ProductPrice} ImageUrl={ite.ProductImage} />
                    ))
                }


             
            </div>
               <div className="Numbering  h-10  mx-auto absolute bottom-0 left-[40%] z-5">
                    <div className="Counting flex items-center justify-center gap-2">
                        <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center " onClick={()=>{setParamspage(0)}}>1</div>
                        <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center " onClick={()=>{setParamspage(1)}}>2</div>
                        <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center " onClick={()=>{setParamspage(2)}}>3</div>
                        <div className="Coun cursor-pointer hover:bg-[#F3F3F3] w-8 h-8 rounded-full text-[12px] flex items-center justify-center " onClick={()=>{setParamspage(3)}}><img src="../Routes/Shop/Right/Slide.png " className='w-2 h-2' alt="" srcset="" /></div>
                    </div>
                </div>
        </div>
    )
}

export default Right
