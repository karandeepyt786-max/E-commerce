import React from "react";

const Main3Left = () => {
  return (
    <div className="md:w-4/10 w-[95%] [@media(max-width:600px)]:w-[80vw]  relative    ">
      <div className="flex flex-col gap-4 text-center md:text-left [@media(max-width:600px)]:items-center  items-center md:items-start">
        <div className="text-[24px] sm:text-[28px] lg:text-[40px] volkhov text-[#484848]">
          Deals Of The Month
        </div>
        <div className="text-[13px] sm:text-[14px] lg:text-[16px] text-[#8A8A8A] [@media(max-width:600px)]:text-center max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </div>
        <button className="bg-black text-white px-8 py-3 rounded text-[14px] font-medium hover:bg-gray-800 transition-colors">
          Buy Now
        </button>
        <div className="mt-6">
          <img className="w-[200px] sm:w-[250px] object-contain" src="../Main3/image1.png" alt="Calendar" />
        </div>
        <div className="flex gap-4 mt-4">
          <img className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer' src="../Main3/image2iconLeft.png" alt="Arrow Left" />
          <img className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer' src="../Main3/image2iconRight.png" alt="Arrow Right" />
        </div>
      </div>

    </div>
  );
};

export default Main3Left;
