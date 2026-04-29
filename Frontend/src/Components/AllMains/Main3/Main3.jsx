import React from 'react'
import Main3Left from './Main3Left'
import Main3Right from './Main3Right'

const Main3 = () => {
  return (
    <div className='w-[95%] [@media(max-width:600px)]:flex-col [@media(max-width:600px)]:items-center  self-end lg:w-[90%] h-auto flex flex-col md:flex-row items-center justify-center lg:justify-between relative gap-10 py-10'>
      <Main3Left/>
      <Main3Right/>
    </div>
  )
}

export default Main3
