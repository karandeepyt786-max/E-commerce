import React from 'react'
import Main4Products from './Main4Products'

const Main4 = () => {

let ProductData=[
    {
        name:"Shiny",
        rating:4,
        reviews:"44.1",
        Price:"$100",
        stock:true,
        Offer:"10%",
        ImageUrl:"../Main4/image1.png"
    },
    {
        name:"Long Dress",
        rating:5,
        reviews:"44.1",
        Price:"$100",
        stock:false,
        Offer:"",
        ImageUrl:"../Main4/image2.png"
    },
    {
        name:"Full Sweater",
        rating:3,
        reviews:"44.1",
        Price:"$50",
        stock:true,
        Offer:"",
        ImageUrl:"../Main4/image3.png"
    },
    {
        name:"White Dress",
        rating:5,
        reviews:"99.1",
        Price:"$120",
        stock:false,
        Offer:"",
        ImageUrl:"../Main4/image4.png"
    },
    {
        name:"Colorfull Dress",
        rating:5,
        reviews:"44.1",
        Price:"$500",
        stock:true,
        Offer:"",
        ImageUrl:"../Main4/image5.png"
    },
    {
        name:"White Shirt",
        rating:5,
        reviews:"44.1",
        Price:"$100",
        stock:false,
        Offer:"10%",
        ImageUrl:"../Main4/image6.png"
    },
]

  return (
    <div className='w-[65%]  flex flex-col items-center gap-3 pb-10'>
        <div className="Main4Box1 flex flex-col gap-5">
            <div className="Main4Box1Heading text-[30px] volkhov   text-[#484848] text-center">New Arrivals</div>
            <div className="Main4Box1Data text-[14px] text-center px-55 text-[#8A8A8A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </div>
            <div className="Main4Box1Btns flex justify-between  mt-3 ">
                <div className="Main4Box1Btns1 text-[#8A8A8A] bg-[#FAFAFA] w-40 h-13 flex items-center justify-center rounded-2xl hover:bg-black hover:text-white cursor-pointer">Men's Fashion</div>
                <div className="Main4Box1Btns1 text-[#8A8A8A] bg-[#FAFAFA] w-40 h-13 flex items-center justify-center rounded-2xl hover:bg-black hover:text-white cursor-pointer">Women's Fashion</div>
                <div className="Main4Box1Btns1 text-[#8A8A8A] bg-[#FAFAFA] w-40 h-13 flex items-center justify-center rounded-2xl hover:bg-black hover:text-white cursor-pointer">Women Accessories</div>
                <div className="Main4Box1Btns1 text-[#8A8A8A] bg-[#FAFAFA] w-40 h-13 flex items-center justify-center rounded-2xl hover:bg-black hover:text-white cursor-pointer">men Accessories</div>
                <div className="Main4Box1Btns1 text-[#8A8A8A] bg-[#FAFAFA] w-40 h-13 flex items-center justify-center rounded-2xl hover:bg-black hover:text-white cursor-pointer">Discount Deals</div>
            </div>
        </div>
     
        <div className="Main4Box2 flex bg-[#F5F5F5] justify-around  mt-1 flex-wrap p-2 gap-2 rounded-2xl ">

            {
                ProductData.map((ite)=>(
                    <Main4Products Offer={ite.Offer} name={ite.name} rating={ite.rating} Price={ite.Price} reviews={ite.reviews} stock={ite.stock} Size={ite.Size} ImageUrl={ite.ImageUrl}/>
                ))
            }


        </div>
        <div className="btn bg-black text-white h-10 w-30 flex items-center justify-center rounded ">View More</div>
    </div>
  )
}

export default Main4
