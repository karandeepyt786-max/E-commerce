import React, { useState } from 'react'
import axios from "axios"
import { AdminData } from '../../../Redux/Admin'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

let CreatorAdmin = ""
const CreateProduct = () => {

    const [BrandName, setBrandName] = useState("")
    // const [CreatorAdmin, setCreatorAdmin] = useState("")
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState(0)
    const [ProductImage, setProductImage] = useState(null)


    const [ProductCategory, setProductCategory] = useState("")
    const [Size, setSize] = useState([])
    const [ProductStock, setProductStock] = useState(0)
    const [ProductColors, setProductColors] = useState([])
    const [ProductCode, setProductCode] = useState(0)

    const [ProductTags, setProductTags] = useState([])
    const [Tags, setTags] = useState("")

    const AdminDetails = useSelector(state => state.Admin.Admin)

    useEffect(() => {
        CreatorAdmin = AdminDetails[0].emailAddress
    })

    const Formhandler = async (e) => {
        e.preventDefault();



        // formData.append("BrandName", BrandName)
        // formData.append("ProductName", ProductName)
        // formData.append("ProductPrice", ProductPrice)
        // formData.append("ProductCategory", ProductCategory)
        // formData.append("ProductImage", ProductImage)



        if (CreatorAdmin) {
            try {
                await axios.post("https://e-commerce-backend-2-zmoo.onrender.com/Admin/CreateProduct", { CreatorAdmin: CreatorAdmin, BrandName: BrandName, ProductName: ProductName, ProductPrice: ProductPrice, ProductCategory: ProductCategory, ProductImage: ProductImage, Size: Size, ProductColors: ProductColors, ProductTags: ProductTags, ProductCode: ProductCode, ProductStock: ProductStock }, {
                    withCredentials: true, headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then((data) => {
                    console.log("create product data ", data)
                        .catch((err) => {
                            console.log(err.message)
                        })
                })
console.log(
    { CreatorAdmin: CreatorAdmin, BrandName: BrandName, ProductName: ProductName, ProductPrice: ProductPrice, ProductCategory: ProductCategory, ProductImage: ProductImage, Size: Size, ProductColors: ProductColors, ProductTags: ProductTags, ProductCode: ProductCode, ProductStock: ProductStock }

)


                console.log(formData.get("mobile"))
            }
            catch (err) {
                console.log(err.message)
            }
        }


        console.log(BrandName, ProductName, ProductPrice, ProductCategory, ProductImage)
    }

    return (
        <div className='w-[100%] h-[100vh] flex flex-col items-center'>
            <form encType='multipart/form-data' onSubmit={(e) => { Formhandler(e) }} className="BoxForProductCreation w-[80%] h-[80%]  bg-gray-100/20 flex items-center justify-between px-10">
                <input onChange={(e) => { setProductImage(e.target.files[0]) }} className="UploadImage bg-white w-70 h-90  border-3 border-black border-dashed rounded-2xl text-white" type="file" />

                <div className="ProductDetails w-[50%] h-90  rounded-2xl flex flex-col justify-center gap-4">

                    <div className="BrandName bg-white ">
                        <input type="text" value={BrandName} onChange={(e) => { setBrandName(e.target.value) }} name='BrandName' className='BrandName w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='BrandName' />
                    </div>

                    <div className="ProductName bg-white">
                        <input value={ProductName} onChange={(e) => { setProductName(e.target.value) }} type="text" name='ProductName' className='ProductName w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='ProductName' />

                    </div>

                    <div className="ProductPrice bg-white">
                        <input value={ProductPrice} placeholder="Choose Price" onChange={(e) => { setProductPrice(e.target.value) }} type="number" name='ProductPrice' className='ProductPrice w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' />

                    </div>

                    {/* <div className="ProductCategory bg-white">
                        <input value={ProductCategory} onChange={(e) => { setProductCategory(e.target.value) }} type="text" name='ProductCategory' className='ProductCategory w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='ProductCategory' />

                    </div>   */}



                    <div className="Size flex gap-3" name="Sizes">
                        <div className="">S <input type="checkbox" onChange={(e) => { e.target.checked ? setSize(prev => [...prev, e.target.name]) : setSize(prev => prev.filter((ite) => (ite != e.target.name))) }} className='Mobile' name='S' /></div>
                        <div> M <input type="checkbox" onChange={(e) => { e.target.checked ? setSize(prev => [...prev, e.target.name]) : setSize(prev => prev.filter((ite) => (ite != e.target.name))) }} className='Shoes' name='M' /></div>
                        <div> L <input type="checkbox" onChange={(e) => { e.target.checked ? setSize(prev => [...prev, e.target.name]) : setSize(prev => prev.filter((ite) => (ite != e.target.name))) }} className='Clothes' name='L' /></div>
                        <div> XL <input type="checkbox" onChange={(e) => { e.target.checked ? setSize(prev => [...prev, e.target.name]) : setSize(prev => prev.filter((ite) => (ite != e.target.name))) }} className='Laptop' name='XL' /></div>
                    </div>

                    <select name="category" className='w-30' id="" onChange={(e) => { setProductCategory(e.target.value) }} >
                        <option name="Shoes" value="Shoes">Shoes</option>
                        <option name="Clothes" value="Clothes">Clothes</option>
                        <option name="Mobiles" value="Mobiles">Mobiles</option>
                        <option name="Laptops" value="Laptops">Laptops</option>
                        <option name="Hats" value="Hats">Hats</option>
                    </select>



                    <div>
                        <input type="numbe  r" name='ProductStock' placeholder='product stock' onChange={(e) => { setProductStock(e.target.value) }} />
                    </div>

                    <div>
                        <input type="text" value={Tags} placeholder='product tags' onChange={(e) => {e.preventDefault();     setTags(e.target.value) }} />
                        <button onClick={(e) => { setProductTags(prev => [...prev, Tags]) ;setTags("") }}>Add Tag</button>
                    </div>

                    <div className="Size flex gap-3" name="Colors">
                        <div> red    <input name="red   " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Shoes' /></div>
                        <div> blue   <input name="blue  " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Clothes' /></div>
                        <div> green  <input name="green " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> pink   <input name="pink  " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> gray   <input name="gray  " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> black  <input name="black " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> orange <input name="orange" type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> cyan   <input name="cyan  " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                        <div> cyan   <input name="cyan  " type="checkbox" onChange={(e) => { e.target.checked ? setProductColors(prev => [...prev, e.target.name.trim()]) : setProductColors(prev => prev.filter((ite) => (ite != e.target.name.trim()))) }} id='Size' className='Laptop' /></div>
                    </div>

                    <div>
                        <input type="number" name='DiscountCode' placeholder='Discount Code' onChange={(e) => { setProductCode(e.target.value) }} />
                    </div>

                    <div className="div absolute  bg-red-200 w-50 h-50 right-0" >
                
                        {ProductTags}
                  
                    </div>





                    <div className=" bg-white">
                        <input type="submit" className='bg-black text-white px-7 py-3 rounded' />
                    </div>


                </div>

            </form>
        </div>
    )
}

export default CreateProduct
