import React from 'react'

const ProductBox = () => {
    return (
        <div className="Container w-55 h-90  ">

            <div className="image w-[100%] h-[80%] flex items-center justify-center" style={{backgroundImage:"url('../Routes/Shop/Right/image1.png')",backgroundSize:"cover"}}  >
            <div className="SolOutBox w-15 h-15 bg-gray-400 rounded-full flex items-center justify-center flex-col text-white font-extrabold leading-4">
<span>Sold</span> <span>Out</span>
            </div>
             </div>
            <div className="DetailBox flex flex-col gap-1 pt-2">
                <div className="Heading text-[13px] font-bold">Rounded Red Hat</div>
                <div className="Price text-[10px] ">$8.00</div>
                <div className="Color flex gap-2 pt-1 ">

                    <div className="pra hover:border-1 h-6 w-6 flex items-center justify-center rounded-full">
                        <div className="color1 h-4 w-4  rounded-full bg-yellow-400">
                        </div>
                        
                    </div>
                    <div className="pra hover:border-1 h-6 w-6 flex items-center justify-center rounded-full">
                        <div className="color1 h-4 w-4  rounded-full bg-black">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBox
