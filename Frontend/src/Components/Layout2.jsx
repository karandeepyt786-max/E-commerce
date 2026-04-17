
import { useLocation } from 'react-router-dom';
import Footer from './HomeThreeComponents/Footer';

const Layout = () => {
    const location = useLocation();
    return (
        <div>
            {

                (
                    location.pathname == "/Signin" ||
                    location.pathname == "/Signup" ||
                    location.pathname =="/ForgetPassword" ||
                    location.pathname == "/Confimation" ||
                    location.pathname == "/NewPassword" ||
                    location.pathname == "/Thumbnail" ||
                    location.pathname == "/not-found"
                )
                    ? "" : <Footer />}


        </div>
    )
}

export default Layout
