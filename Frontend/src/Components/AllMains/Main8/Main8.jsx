import React from 'react'

const Main8 = () => {
    return (
        <div className='w-[70%] h-[60vh]   flex pb-8 self-center    '>

            <div className="Left w-[30%]  ">
                <img src="../Main8/image1.png" className='h-[100%]' alt="" srcset="" />
            </div>

            <div className="Center w-[80%] h-[100%] self-center mt-60">
                  <div className="DataBox flex flex-col gap-3 ">
                      <div className="Heading text-[27px] text-[#484848] font-[500] volkhov text-center">Subscribe To Our Newsletter</div>
                    <div className="Data text-[#8A8A8A] text-center text-[12px] px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </div>
                    <div className="Email shadow-2xl text-[#8A8A8A] pl-4 pt-3  bg-white self-center    w-100 h-10 flex font-[500] items-center ">michael@ymail.com</div>
                    <div className="Button bg-black flex items-center justify-center text-white w-41 self-center mt-2 rounded h-10">Subscribe Now</div>
                  </div>
            </div>

           <div className="Right w-[30%]  ">
                <img src="../Main8/image2.png" className='h-[100%]' alt="" srcset="" />
            </div>

        </div>
    )
}

export default Main8
