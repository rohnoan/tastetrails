import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [active, setActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1].toUpperCase(); 
    if (['HOME', 'PRODUCTS', 'CART'].includes(path)) {
      setActive(path);
    }
  }, [location]);

  return (
    <div className="bg-blue-500 flex justify-center">
      <div className="flex w-full sm:max-w-[500px] flex-row h-10 items-center justify-between">
        {['HOME', 'PRODUCTS', 'CART'].map((item) => (
          <div key={item} className="flex flex-1 justify-center items-center">
            <Link to={`/${item.toLowerCase()}`}>
              <button
                className={`border-2 border-black bg-white rounded-lg w-[100px] sm:w-[150px] text-black ${
                  active === item ? 'bg-slate-600 text-white' : ''
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
