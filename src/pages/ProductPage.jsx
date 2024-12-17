import React from 'react'
import { useState,useEffect } from 'react'
import Product from '../components/Product';
export default function ProductPage({search}) {

    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await fetch(
                    "https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page=1&page_size=20"
                );
                const data=await response.json();
                console.log(data);
                if(data.products){
                    setProducts(data.products);
                }
            } catch(error){
                console.log("error");
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    },[])

    const filtered=products.filter((product)=>{
        return product.product_name.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <div className=' sm:mx-[0px] mx-5 bg-white pt-[40px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {loading? (<p>loading...</p>)
      :
      (filtered.map((product,index)=>(
        <div key={product.id}>
            <Product
            index={index}
            name={product.product_name}
            image={product.image_url}
            price={product.product_price}
            ingredients={product.ingredients_text}
            category={product.categories}
            grade={product.nutrition_grades}
            />
        </div>
      )))}
    </div>
  )
}
