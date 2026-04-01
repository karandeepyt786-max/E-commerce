import React from 'react'

const Left = (props) => {
  return (
    <div className='w-[40%] h-110   flex '>
      <div className="Left h-[100%]">
        <div className="Box flex flex-col justify-around  h-[100%]">
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image1.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image2.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image13.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image14.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image15.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1 flex items-center justify-center">
           <img src="../Routes/Products/image16.png" className='w-7 h-10' alt="" srcset="" />
         </div>
         <div className="imagparent w-11 h-13 rounded hover:border-1    flex items-center justify-center">
           <img src="../Routes/Products/image17.png" className='w-7 h-10' alt="" srcset="" />
         </div>
        </div>
      </div>
      <div className="Right w-[80%] ml-2">
        <img src={`http://localhost:3000/Products/${props.imgSrc}`} className='w-[100%] h-[100%] contain' alt="" srcset="" />
      </div>
    </div>
  )
}

export default Left
