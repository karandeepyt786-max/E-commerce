import React from 'react'

const Main3Right = () => {
  return (
    
<>


      <div className='flex flex-wrap   [@media(max-width:600px)]:w-[90%] [@media(max-width:600px)]:justify-center  justify-center md:justify-start gap-3 md:gap-6 w-full lg:w-3/4'>
        <div className='relative'>
          <img className='w-[180px] [@media(max-width:639px)]:w-[50vw]  [@media(max-width:639px)]:h-[70vw] min-h-[320px] min-w-[250px]  sm:w-[250px] sm:h-[380px] aspect-[3/4] cover shadow-lg' src="../Main3/image31.png" alt="Deal 1" />

          {/* <div className='hidden sm:flex items-center gap-2 absolute -right-10 bottom-4 rotate-90 origin-left'>
            <img className='w-4 h-4' src="../Main3/image41.png" alt="" />
            <img className='w-2 h-2' src="../Main3/image42.png" alt="" />
            <img className='w-2 h-2' src="../Main3/image42.png" alt="" />
            <img className='w-2 h-2' src="../Main3/image42.png" alt="" />
          </div> */}

        </div>
        {/* <img className='hidden xs:block w-[180px] sm:w-[22vw] lg:w-[20vw] aspect-[3/4] object-cover rounded-xl shadow-lg' src="../Main3/image32.png" alt="Deal 2" /> */}
        <img className='[@media(max-width:639px)]:hidden lg:block h-[30%] sm:w-[200px] sm:h-[280px] cover  shadow-lg' src="../Main3/image32.png" alt="Deal 3" />
        <img className='[@media(max-width:1238px)]:hidden h-[60%] sm:w-[200px] sm:h-[280px] cover  shadow-lg' src="../Main3/image33.png" alt="Deal 3" />
      </div>
</>
  )
}

export default Main3Right
