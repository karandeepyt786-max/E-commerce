import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Components/HomeThreeComponents/Nav.jsx'
import Nav2 from './Components/RoutesCoponents/Nav2.jsx'
import Layout from './Components/Layout.jsx'
import Layout2 from './Components/Layout2.jsx'
import { store } from '../Redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Provider store={store}>

 <Layout/>
    <App />
    <Layout2/>
  </Provider>
    </BrowserRouter>
  </StrictMode>
)
