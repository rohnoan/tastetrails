import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Functions from './components/Functions'
import Product from './components/Product'
import ProductPage from './pages/ProductPage'
export default function App() {

  const[search,setSearch]=useState('');


  return (
    <>
      <Header/>
      <Functions setSearch={setSearch}/>
      <ProductPage search={search}/>

    </>
  )
}
