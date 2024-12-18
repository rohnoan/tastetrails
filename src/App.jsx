import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import SingleProduct from './pages/SingleProduct';  // Add this import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import CartContextProvider from './context/CartContextProvider';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <CartContextProvider>
      <BrowserRouter basename="/tastetrails/">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />  
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}
