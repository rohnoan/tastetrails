import React, { useState, useEffect, useCallback, useRef } from 'react';
import Product from '../components/Product';
import FilterInput from '../components/FilterInput'; // Import the new FilterInput component

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

  const filterRef = useRef(null);

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(input); 
  }, [input]);

  const fetchProducts = () => {
    setLoading(true);

    let url = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page=1&page_size=20`;
    if (category) {
      url = `https://world.openfoodfacts.org/category/${category}.json`;
    }
    if (sortOrder) {
      url += `&sort_by=${sortOrder}`;
    }
    if (search) {
      url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${search}&json=true`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setProducts(data.products);
          setFilteredProducts(data.products);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          setFilteredProducts((prevProducts) => [...prevProducts, ...data.products]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [search, sortOrder, category, page]);

  const handleScroll = useCallback(() => {
    const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bg-gray-300 animate-pulse rounded-lg p-4 w-full h-[300px] sm:h-[350px] lg:h-[400px]">
            <div className="h-1/2 bg-gray-400 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-400 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-400 rounded-md"></div>
          </div>
        )) : null}
      </div>
    );
  }

  return (
    <div>
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

      <div className="md:pl-0 xl:pl-5 pl-5 bg-[#E8EBE4] pt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={product.id || product.code || `product-${index}`}>
            <Product
              index={index}
              name={product.product_name || 'No Name'}
              image={product.image_url || 'placeholder.jpg'}
              ingredients={product.ingredients_text || 'No Ingredients'}
              category={product.categories || 'No Category'}
              grade={product.nutrition_grades || 'N/A'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
