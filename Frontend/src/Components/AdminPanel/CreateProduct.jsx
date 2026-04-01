import React from 'react'

const CreateProduct = () => {

const Formhandler=(e)=>{
        e.preventDefault();
     const formData=new FormData(e.target);
         console.log(formData.get("BrandName"))}

  return (
    <div className='w-[100%] h-[100vh] flex flex-col items-center'>
    <form onSubmit={(e)=>{Formhandler(e)}} className="BoxForProductCreation w-[80%] h-[80%]  bg-gray-100/20 flex items-center justify-between px-10">
    <input className="UploadImage bg-white w-70 h-90  border-3 border-black border-dashed rounded-2xl text-white" type="file" />

 <div className="ProductDetails w-[50%] h-90  rounded-2xl flex flex-col justify-center gap-4">

    <div className="BrandName bg-white ">
        <input type="text" name='BrandName' className='BrandName w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='BrandName' />
    </div>

    <div className="ProductName bg-white">
                <input type="text" className='ProductName w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='ProductName' />

    </div>

    <div className="ProductPrice bg-white">
                <input type="number" className='ProductPrice w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='ProductPrice' />

    </div>

    <div className="ProductCategory bg-white">
                <input type="text" className='ProductCategory w-[60%] focus:outline-none border-b-1 pb-2 border-b-gray-300' placeholder='ProductCategory' />

    </div>

    <div className="ProductCategory bg-white">
<input type="submit" className='bg-black text-white px-7 py-3 rounded' />
    </div>


 </div>
 
    </form>

    </div>
  )
}

export default CreateProduct
