
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer.jsx";
import Sidebar from "./component/Sidebar";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Register from "./component/Register";
import Login from "./component/Login";
import Service from "./component/Service";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from "react-top-loading-bar";
import ClearIconDemo from "./component/A";
import Portfolio from "./component/Portfolio";
import { useDispatch } from "react-redux";

const App = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()

const getValueOfProgressBar= useCallback(()=>{
dispatch(setProgress())
},[])
  useEffect(() => {
    ProgressBar();
  }, [getValueOfProgressBar]);

  const ProgressBar = () => {

   const myId=  setInterval((data) => {
      let i =10
      console.log(i++,"dtat");
      setProgress(i++);
     }, 100);
      clearInterval(myId)  
    

   
  };

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => ProgressBar() }
        />
        <NavBar />
        <div className="container-fluid d-flex ">
          
          <Sidebar />
         
          <div className="content w-100 " style={{ height: "100vh" }}>
            <Routes>
              <Route path="/" element={<Home setProgress={setProgress} />} />
              <Route
                path="/about"
                element={<About setProgress={setProgress} />}
              />
              <Route
                path="/contact"
                element={<Contact setProgress={setProgress} />}
              />
              <Route
                path="/login"
                element={<Login setProgress={setProgress} />}
              />
              <Route
                path="/register"
                element={<Register setProgress={setProgress} />}
              />
              <Route
                path="/service"
                element={<Service setProgress={setProgress} />}
              />
              <Route
                path="/a"
                element={<ClearIconDemo setProgress={setProgress} />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio setProgress={setProgress} />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </BrowserRouter>
    </>
  );
};

export default App;
