import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Functions from './components/Functions'
import Product from './components/Product'
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function App() {

  const[search,setSearch]=useState('');


  return (
    <>
      <Header/>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}
