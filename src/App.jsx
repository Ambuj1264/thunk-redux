import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./component/Home"
import  NavBar from "./component/Navbar";
import Footer from "./component/Footer.jsx"
import Sidebar from './component/Sidebar';
import "./App.css"
import About from './component/About';
import Contact from './component/Contact';
import Register from './component/Register';
import Login from './component/Login';
import Service from "./component/Service"

const App = () => {
  return (
    <>


    <BrowserRouter>

    <NavBar />
    <div className="d-flex">
    <Sidebar />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/service" element={<Service/>}/>
        
    </Routes>
</div>
    <Footer />
 
    </BrowserRouter>



    </>
  )
}


export default App