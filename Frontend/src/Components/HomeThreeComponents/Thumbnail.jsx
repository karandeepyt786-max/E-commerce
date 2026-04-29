import React from 'react'

const Thumbnail = () => {
  return (
    <div className='w-full min-h-[60vh] lg:min-h-screen relative overflow-hidden bg-gray-50 flex items-center justify-center' style={{ backgroundImage: "url(../Thumbnail/image1.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        {/* Decorative Images - Hidden or scaled on mobile */}
        <img src="../Thumbnail/image4.png" className='hidden lg:block w-64 h-64 absolute left-10 top-20 z-10' alt="" />
        <img src="../Thumbnail/image3.png" className='hidden md:block w-80 h-80 absolute left-1/4 top-1/4 z-20 opacity-80' alt="" />
        <img src="../Thumbnail/image2.png" className='w-64 sm:w-96 lg:w-[500px] h-auto relative z-30 drop-shadow-2xl' alt="Main Thumbnail" />
        <img src="../Thumbnail/image5.png" className='hidden lg:block w-48 h-48 absolute right-10 bottom-20 z-40' alt="" />
        <img src="../Thumbnail/image6.png" className='w-24 sm:w-40 h-auto absolute top-10 left-10 z-50' alt="Logo" />
      </div>
    </div>
  )
}

export default Thumbnail
