import React, { useEffect } from 'react'
import Nav from './HomeThreeComponents/Nav'
import Nav2 from './RoutesCoponents/Nav2'
import { useLocation } from 'react-router-dom';
import Footer from './HomeThreeComponents/Footer';

const Layout = () => {
    const location = useLocation();
    return (
        <div>

           { location.pathname === "/Signin" ||
            location.pathname ==="/Signup"||
            location.pathname ==="/ForgetPassword"||
            location.pathname ==="/Confimation"||
            location.pathname ==="/NewPassword" ||
            location.pathname ==="/Thumbnail" ||
            location.pathname ==="/AdminProfile" ||
            location.pathname ==="/not-found" 
            ?"":location.pathname === "/"  ? <Nav /> : <Nav2 />
            }
           
        </div>
    )
}

export default Layout
