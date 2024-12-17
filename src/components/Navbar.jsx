import React, { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('');

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className="bg-blue-500 flex justify-center">
      <div className="flex w-full sm:max-w-[500px] flex-row h-10 items-center justify-between">
        {['HOME', 'PRODUCTS', 'CART'].map((item) => (
          <div key={item} className="flex flex-1 justify-center items-center">
            <button
              className={`border-2 border-black bg-white rounded-lg w-[100px] sm:w-[150px] text-black ${
                active === item ? 'bg-slate-700 text-white' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
