import React from 'react'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Shop from './Components/RoutesCoponents/Shop/Shop'
import Products from './Components/RoutesCoponents/Products/Products'
import ShoppingCart from './Components/RoutesCoponents/ShoppingCart.jsx/ShoppingCart'
import Checkout from './Components/RoutesCoponents/Checkout/Checkout'
import Signin from './Components/AccountForms/Signin'
import Signup from './Components/AccountForms/Signup'
import ForgetPassword from './Components/AccountForms/ForgetPassword'
import Confimation from './Components/AccountForms/Confimation'
import NewPassword from './Components/AccountForms/NewPassword'
import Thumbnail from './Components/HomeThreeComponents/Thumbnail'
import AdminSigninPanel from './Components/AdminPanel/AdminSigninPanel'
import AdminSignupPanel from './Components/AdminPanel/AdminSignupPanel'
import AdminProfile from './Components/AdminPanel/AdminProfile'
import CreateProduct from './Components/AdminPanel/CreateProduct'
import AdminAllProducts from './Components/AdminPanel/AdminAllProducts'
import UserCart from './Components/AccountForms/UserCart'
import UserOrder from './Components/AccountForms/UserOrder'
import Error from './Components/Error'


import {Navigate} from "react-router-dom"
import Order from './Components/RoutesCoponents/Order/Order'




const App = () => {
  return (
    <div className='w-[calc(98vw+12px)]  overflow-hidden '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Cart' element={<ShoppingCart />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/Confimation' element={<Confimation />} />
        <Route path='/NewPassword' element={<NewPassword />} />
        <Route path='/Thumbnail' element={<Thumbnail />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />

        <Route path='/UserOrder' element={<UserOrder />} />
        <Route path='/UserCart' element={<UserCart />} />



        <Route path='/AdminSigninPanel' element={<AdminSigninPanel/>} />
        <Route path='/AdminSignupPanel' element={<AdminSignupPanel />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />
        <Route path='/CreateProduct' element={<CreateProduct />} />
        <Route path='/AdminAllProducts' element={<AdminAllProducts />} />

        <Route path='/Order' element={<Order />} />



        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<Error />}/>


      </Routes>
    </div>
  )
}

export default App
