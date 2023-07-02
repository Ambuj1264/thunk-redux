import React ,{useEffect, useState}from 'react'
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
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
      ProgressBar();

  },[])
const ProgressBar=()=>{
  setProgress(10)
}
  return (
  
    <>


    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <NavBar />
    <div className="d-flex">
    <Sidebar />
    <Routes>
        <Route path="/" element={<Home setProgress={setProgress}/>}/>
        <Route path="/about" element={<About setProgress={setProgress}/>}/>

        <Route path="/contact" element={<Contact setProgress={setProgress}/>}/>
        <Route path="/login" element={<Login setProgress={setProgress}/>}/>
        <Route path="/register" element={<Register setProgress={setProgress}/>}/>
        <Route path="/service" element={<Service setProgress={setProgress}/>}/>
        
    </Routes>
</div>
    <Footer />
 
    </BrowserRouter>



    </>
  )
}


export default App