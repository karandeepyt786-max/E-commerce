import React from "react";

const Main3Left = () => {
  return (
    <div className="w-[40%] ">
      <div className="MainLeftBox1 flex flex-col gap-2">
        <div className="MainLeftBox1Heading text-[34px] volkhov pr-18 text-[#484848] ">
          Deals Of The Month
        </div>
        <div className="MainLeftBox1Details text-[12px] pr-29 text-[#8A8A8A] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </div>
        <div className="MainLeftBox1Button text-white text-[15px] px-5 py-2 rounded bg-black w-30 flex flex-col ml-4 items-center ">
          Buy Now
        </div>
        <div className="MainLeftCalender mt-8">
          <img className="w-[70%]" src="../Main3/image1.png" alt="" srcset="" />
        </div>

      </div>
      <div className="MainLeftBox2">
        <div id="Icons" className='flex   relative left-65 top-2'>
  <div className="iconLeft"><img className='w-[50px] absolute' src="../Main3/image2iconLeft.png" alt="" srcset="" /></div>
  <div className="iconRight"><img className='w-[50px] absolute left-10 ' src="../Main3/image2iconRight.png" alt="" srcset="" /></div>
</div>
      </div>
    </div>
  );
};

export default Main3Left;
