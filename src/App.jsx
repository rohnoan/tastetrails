import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Functions from './components/Functions'
import Product from './components/Product'
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
export default function App() {

  const[search,setSearch]=useState('');


  return (
    <>
      <Header/>
    <Navbar/>
      <Functions setSearch={setSearch}/>
      <ProductPage search={search}/>

    </>
  )
}
