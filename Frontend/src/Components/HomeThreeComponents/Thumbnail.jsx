import React from 'react'

const Thumbnail = () => {
  return (
    <div className='w-[100vw] h-[100vh] relative  ' style={{backgroundImage:"url(../Thumbnail/image1.png)",backgroundSize:"cover"}} >
<img src="../Thumbnail/image4.png" className='w-120 h-120 absolute right-115 top-51 z-6' alt="" srcset="" />
<img src="../Thumbnail/image3.png" className='w-140 h-140 absolute right-63 top-30 z-7' alt="" srcset="" />
<img src="../Thumbnail/image2.png" className='w-150 h-150 absolute right-10 top-21 z-8' alt="" srcset="" />
<img src="../Thumbnail/image5.png" className='w-90 h-90 absolute left-20 bottom-20 z-8' alt="" srcset="" />
<img src="../Thumbnail/image6.png" className='w-40 h-10 absolute left-30 top-21 z-8' alt="" srcset="" />
    </div>
  )
}

export default Thumbnail
