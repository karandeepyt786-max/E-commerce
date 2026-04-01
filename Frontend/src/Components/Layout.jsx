import React, { useEffect } from 'react'
import Nav from './HomeThreeComponents/Nav'
import Nav2 from './RoutesCoponents/Nav2'
import { useLocation } from 'react-router-dom';
import Footer from './HomeThreeComponents/Footer';

const Layout = () => {
    const location = useLocation();
    return (
        <div>
                  {/* <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
          <Route path='/Confimation' element={<Confimation/>}/>
          <Route path='/NewPassword' element={<NewPassword/>}/> */}

           { location.pathname === "/Signin" ||
            location.pathname ==="/Signup"||
            location.pathname ==="/ForgetPassword"||
            location.pathname ==="/Confimation"||
            location.pathname ==="/NewPassword" ||
            location.pathname ==="/Thumbnail" ||
            location.pathname ==="/AdminProfile" 
            
            ?"":location.pathname === "/"  ? <Nav /> : <Nav2 />
            }
          
           
        </div>
    )
}

export default Layout
