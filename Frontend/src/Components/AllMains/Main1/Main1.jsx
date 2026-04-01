import React from 'react'
import Main1Left from './Main1Left'
import Main1Center from './Main1Center'
import Main1Right from './Main1Right'
const Main1 = () => {
  return (
    <div className='w-[80%] h-[calc(100vh-150px)]  flex  justify-center gap-10 overflow-hidden   pt-[20px] '>
      <Main1Left/>
      <Main1Center/>
      <Main1Right/>
    </div>
  )
}

export default Main1
