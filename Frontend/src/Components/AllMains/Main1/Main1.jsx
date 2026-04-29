import React from 'react'
import Main1Left from './Main1Left'
import Main1Center from './Main1Center'
import Main1Right from './Main1Right'
const Main1 = () => {
  return (
    <div className='w-[95%] lg:w-[80%] flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-10 pt-[20px] pb-[40px]'>
      <Main1Left/>
      <Main1Center/>
      <Main1Right/>
    </div>
  )
}

export default Main1
