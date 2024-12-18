import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {

  const[search,setSearch]=useState('');


  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
