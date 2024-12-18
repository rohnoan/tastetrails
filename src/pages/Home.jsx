import React from 'react'

export default function Home() {
  return (
    <div className="features-container ">
  <h1 className="bg-red-400 flex  justify-center text-[40px] font-bold mb-4">WHY CHOOSE US?</h1>
  
  <div className="mb-4">
    <h3 className="text-xl font-semibold">1. Explore a Wide Variety of Food Products</h3>
    <p>Discover a diverse range of food products, from beverages and snacks to dairy and more. Each product is displayed with essential details such as name, image, category, ingredients, and its nutrition grade.</p>
  </div>

  <div className="bg-slate-200 mb-4">
    <h3 className="text-xl font-semibold">2. Easy Search</h3>
    <p>Quickly search for food products by name or barcode. Just enter your query, and instantly find the products you're looking for.</p>
  </div>

  <div className=" mb-4">
    <h3 className="text-xl font-semibold">3. Product Category Filter</h3>
    <p>Refine your search by selecting different product categories like snacks, beverages, dairy, and more. This makes it easier to find exactly what you need.</p>
  </div>

  <div className="bg-slate-200  mb-4">
    <h3 className="text-xl font-semibold">4. Sort Products</h3>
    <p>Sort the product list by name (A-Z, Z-A) or nutrition grade (A to E) to better organize your options and make informed choices.</p>
  </div>

  <div className="mb-4">
    <h3 className="text-xl font-semibold">5. Infinite Scroll or Load More</h3>
    <p>Browse through an ever-growing list of products with seamless infinite scrolling or use the "Load More" button to discover even more food items.</p>
  </div>

  <div className="bg-slate-200  mb-4">
    <h3 className="text-xl font-semibold">6. Detailed Product Page</h3>
    <p>Click on any product to view its complete details, including ingredients, nutritional values, energy content, and other helpful information like whether it's vegan or gluten-free.</p>
  </div>

  
</div>

  )
}
