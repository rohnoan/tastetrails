import React, { useState, useEffect, useCallback, useRef } from 'react';
import Product from '../components/Product';
import FilterInput from '../components/FilterInput';

export default function ProductPage() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [page, setPage] = useState(1);

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(input);
  }, [input]);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    let url = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page=${page}&page_size=20`;

    if (category) url = `https://world.openfoodfacts.org/category/${category}.json`;
    if (search) url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&json=true`;
    if (sortOrder) url += `&sort_by=${sortOrder}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts((prevProducts) => (page === 1 ? data.products : [...prevProducts, ...data.products]));
        setFilteredProducts((prevProducts) => (page === 1 ? data.products : [...prevProducts, ...data.products]));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [category, search, sortOrder, page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleScroll = useCallback(() => {
    const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100;
    if (nearBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (loading) {
    return (
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
    <div className="bg-[#E8EBE4] min-h-screen">
      <FilterInput
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
        toggleFilter={toggleFilter}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        isFilterOpen={isFilterOpen}
      />
      <div className="flex flex-col justify-center items-center">
        <div>We at Taste Trails focus on nutrients and health rather than just taste.</div>
        <div className="w-full flex justify-center bg-green-700">HEALTHY</div>
        <div className="w-full flex justify-center bg-green-300">WHOLESOME</div>
        <div className="w-full flex justify-center bg-yellow-400">MODERATE</div>
        <div className="w-full flex justify-center bg-orange-400">UNHEALTHY</div>
        <div className="w-full flex justify-center bg-red-500">HARMFUL</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {filteredProducts.map((product, index) => (
          <Product
            key={product.id || product.code || `product-${index}`}
            index={index}
            name={product.product_name || 'No Name'}
            image={product.image_url || '/assets/placeholder.jpg'}
            ingredients={product.ingredients_text || 'No Ingredients'}
            category={product.categories || 'No Category'}
            grade={product.nutrition_grades || 'N/A'}
          />
        ))}
      </div>
    </div>
  );
}
