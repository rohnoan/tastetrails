import React, { useState } from 'react'


//https://world.openfoodfacts.org/cgi/search.pl?search_terms=coke&search_simple=1&jqm=1

//https://world.openfoodfacts.net/api/v2/product/3017624010701?fields=product_name,nutriscore_data,nutriments,nutrition_grades


export default function Functions({setSearch}) {

  const[isFilterOpen,setIsFilterOpen]=useState(false);
  const toggleFilter=()=>{
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <div>
      <div 
      
      className='text-black flex justify-between h-[80px] bg-red-400 items-center'>
      <div className='flex justify-center flex-1'>
        <button 
        onClick={toggleFilter}
        className='bg-white border-black border-2 flex justify-center items-center w-[80px] sm:w-[150px] p-2 rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          FILTER
        </button>
      </div>
      <div className=' flex-[2]'>
        <input 
          onChange={(e)=>setSearch(e.target.value)}
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border-2 border-black rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#001B2E]"
        />
      </div>
      <div className='flex  justify-center flex-1'>
        <button className='w-[80px] bg-white sm:w-[150px] border-2 border-black p-2 rounded'>
          SCAN QR
        </button>
      </div>
    </div>
    <div
        className={`fixed left-0 top-0 w-64 h-full bg-white transition-transform duration-300 ${isFilterOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} `}
        style={{ boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <div className='p-4'>
          <div className='flex justify-between'>
          <button onClick={toggleFilter} className='text-sm border-2 p-2 rounded-lg border-black font-bold mb-4'>CLOSE</button>
          </div>
          {/* Add filter options here */}
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select className="w-full p-2 border rounded">
              <option value="">All Categories</option>
              <option value="food">Food</option>
              <option value="beverages">Beverages</option>
              {/* Add more filter options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price Range</label>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
          {/* Add more filters as needed */}
        </div>
      </div>
    </div>
  )
}
