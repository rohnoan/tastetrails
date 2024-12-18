import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className='flex justify-center items-center'
    >
      <div className='text-3xl '>
        LOADING...
      </div>
    </div>;

  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="border-2 m-10 rounded-2xl p-10 border-black">
      <div className='flex items-center justify-center'>
      <img className='flex justify-center items-center' src={product.image_url || '/assets/placeholder.jpg'} alt={product.product_name} />
      </div>
      <div className='bg-slate-400 border-2 p-4 border-black rounded-xl mt-8'>
      <h1 c>Name : {product.product_name || 'No Name'}</h1>

      <p><strong>Category : </strong> {product.categories || 'No Category'}</p>
      <p><strong>Nutrition Grade : </strong> {product.nutrition_grades.toUpperCase() || 'N/A'}</p>
      <p></p>
      </div>
    </div>
  );
}
