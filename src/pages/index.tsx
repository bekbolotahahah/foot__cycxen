import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import Footer from "../components/Footer";


const LayoutRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default LayoutRoutes;
