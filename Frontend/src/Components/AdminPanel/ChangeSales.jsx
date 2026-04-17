import axios from 'axios'
import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";

const ChangeSales = () => {

  const [Sale, setSale] = useState("")

  const [openForm, setopenForm] = useState(false)

  const SalesBycategory = async (e) => {
    e.preventDefault()

    const formdata = new FormData(e.target)
    console.log(formdata.get("percentage"))


    try {
      let response = await axios.post("http://localhost:3000/Admin/AddSales", { SaleCategory: Sale, SalePercentage: formdata.get("percentage") }, { withCredentials: true })
      console.log(response.data)
    }
    catch (err) {
      console.log("sale by category ", err)
    }



  }



  return (
    <>

      <div className='top-25 right-0 fixed z-10 flex w-55  h-70 flex-col justify-center items-center'>

        <div className="CirBox pl-2 flex items-center justify-center   bg-black w-15 h-15 rounded-full " >
          <FaEdit onClick={() => { setopenForm(!openForm) }} size={30} color='white' />
        </div>

        <div className={`   bg-gray-300/80 rounded h-50 flex items-center w-55 justify-center ${openForm && "hidden"}`}>

          <form action="" className='flex flex-col gap-2' onSubmit={(e) => { SalesBycategory(e) }}>
            <input type="Number" className='border-0 focus:outline-0' name="percentage" placeholder='Enter the sale percentage' />
            <select name="SaleCategory" id="" className='border-0 focus:outline-0' onChange={(e) => { setSale(e.target.value) }} >
              <option name="" value="Clothes">Choose Category</option>
              <option name="Shoes" value="Shoes  ">Shoes </option>
              <option name="Clothes" value="Clothes">Clothes</option>
              <option name="Mobiles" value="Mobiles">Mobiles</option>
              <option name="Laptops" value="Laptops">Laptops</option>
              <option name="Hats" value="Hats">Hats</option>
              <option name="All" value="All">All</option>
            </select>
            <input type="submit" className='bg-black text-white h-10 rounded' />
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangeSales
