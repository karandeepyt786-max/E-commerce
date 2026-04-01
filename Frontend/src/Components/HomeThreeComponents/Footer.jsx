import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] h-[13vh]  border-t-2 border-t-gray-300 flex justify-center py-2'>
    <div className="FooterBox w-[70%] flex  flex-col ">
      <div className="Line1 flex justify-between">
        <div className="Heading text-[#484848] font-[500] text-[20px] volkhov">
          FASCO
        </div>
        <ul className='flex gap-7 text-[#484848] text-[12px]'>
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQ,s</li>
        </ul>
      </div>
      <div className="w-100   self-center text-[10px] pt-7">Copyright © 2022 Xpro . All Rights Reseved.</div>
    </div>
    </div>
  )
}

export default Footer
