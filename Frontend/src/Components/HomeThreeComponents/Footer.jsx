import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t border-gray-200 bg-white py-12'>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#484848] font-bold text-3xl volkhov">
            FASCO
          </div>
          <ul className='flex flex-wrap justify-center gap-4 sm:gap-8 text-[#484848] text-sm font-medium'>
            <li className="hover:text-black cursor-pointer transition-colors">Support Center</li>
            <li className="hover:text-black cursor-pointer transition-colors">Invoicing</li>
            <li className="hover:text-black cursor-pointer transition-colors">Contract</li>
            <li className="hover:text-black cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-black cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-black cursor-pointer transition-colors">FAQ's</li>
          </ul>
        </div>
        <div className="text-gray-400 text-xs text-center border-t border-gray-100 w-full pt-8">
          Copyright © 2022 FASCO. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
