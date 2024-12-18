import React, { useState,useRef, useEffect } from "react";
import Product from "../components/Product";
import { useLocation } from 'react-router-dom';

export default function ProductPage() {

 

  const [search,setSearch]=useState('');
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterRef = useRef(null);


  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };


  useEffect(()=>{
    fetch("https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page=1&page_size=20")
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setProducts(data.products);
        setFilteredProducts(data.products)
        setLoading(false);
      }).catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  

  

useEffect(()=>{
  const filtered=products.filter((product)=>{
    return product.product_name?.toLowerCase().includes(search.toLowerCase())
  });
  console.log(filteredProducts)
  setFilteredProducts(filtered);
},[search,products]);


if(loading){
  return(
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="bg-gray-300 animate-pulse rounded-lg p-4 w-full h-[300px] sm:h-[350px] lg:h-[400px]">
          <div className="h-1/2 bg-gray-400 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-400 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
  return (
    <div>
      <div className="text-black flex justify-between h-[80px] bg-red-400 items-center">
        <div className="flex justify-center flex-1">
          <button 
            onClick={toggleFilter}
            className="bg-white border-black border-2 flex justify-center items-center w-[80px] sm:w-[150px] p-2 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            FILTER
          </button>
        </div>
        <div className="flex-[2]">
          <input
          value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border-2 border-black rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#001B2E]"
          />
        </div>
        <div className="flex justify-center flex-1">
          <button className="w-[80px] bg-white sm:w-[150px] border-2 border-black p-2 rounded">
            SCAN QR
          </button>
        </div>
      </div>

      <div
      ref={filterRef}
        className={`fixed left-0 top-0 w-64 h-full bg-white transition-transform duration-300 ${isFilterOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} `}
        style={{ boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <button onClick={toggleFilter} className="text-sm border-2 p-2 rounded-lg border-black font-bold mb-4">
              CLOSE
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              className="w-full p-2 border rounded"
              //onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="food">Food</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price Range</label>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
        </div>
      </div>
      <div className="justify-center text-center bg-[#E8EBE4]">
      NOTE: grades are a scale to understand how good are these products for your health
      <div className="grid-row-5">
      <div className='bg-green-700 justify-center text-center'>
        A - Nutritious
      </div>
      <div className='bg-green-300 justify-center text-center'>
        B -Wholesome
      </div>
      <div className='bg-yellow-400 justify-center text-center'>
        C - Moderate</div>
      <div className='bg-orange-400 justify-center text-center'>D - Unhealthy</div>
      <div className='bg-red-600 justify-center text-center'>E - Harmful</div>
      </div>
      
      </div>
      <div className="md:pl-0 xl:pl-5 pl-5 bg-[#E8EBE4] pt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={product.id||product.code||`product-${index}`}>
            <Product
              index={index}
              name={product.product_name || "No Name"}
              image={product.image_url || "placeholder.jpg"}
              ingredients={product.ingredients_text || "No Ingredients"}
              category={product.categories || "No Category"}
              grade={product.nutrition_grades || "N/A"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
