import React from 'react'
import Navbar from './Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import AddtoCart from './AddtoCart'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/addtocart" element={<AddtoCart/>}/>
        </Routes>
    </div>
  )
}

export default HomePage