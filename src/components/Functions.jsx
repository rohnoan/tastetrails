import React from 'react'


//https://world.openfoodfacts.org/cgi/search.pl?search_terms=coke&search_simple=1&jqm=1

//https://world.openfoodfacts.net/api/v2/product/3017624010701?fields=product_name,nutriscore_data,nutriments,nutrition_grades


export default function Functions({setSearch}) {
  return (
    <div className='text-white flex justify-between h-[80px] bg-[#294C60] items-center'>
      <div className='flex justify-center flex-1'>
        <button className='bg-[#001B2E] border flex justify-center items-center w-[80px] sm:w-[150px] p-2 rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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
          className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#001B2E]"
        />
      </div>
      <div className='flex  justify-center flex-1'>
        <button className='w-[80px] bg-[#001B2E] sm:w-[150px] border p-2 rounded'>
          SCAN QR
        </button>
      </div>
    </div>
  )
}
