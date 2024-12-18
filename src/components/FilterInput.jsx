import React from 'react';

const FilterInput = React.memo(function FilterInput({
  input,
  setInput,
  handleSearch,
  toggleFilter,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  isFilterOpen,
}) {
  console.log('FilterInput rendered');
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
          <div className="flex flex-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-2 border-black rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#001B2E]"
            />
            <button
              onClick={handleSearch}
              className="ml-[8px] sm:w-[100px] border-[2px] rounded-lg bg-white border-black"
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <button
            className="w-[80px] bg-white sm:w-[150px] border-2 border-black p-2 rounded"
          >
            BARCODE
          </button>
        </div>
      </div>

      <div
        className={`fixed bg-slate-700 left-0 top-0 w-64 h-full text-white transition-transform duration-300 ${isFilterOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
        style={{ boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <button onClick={toggleFilter} className="text-sm w-[200px] border-2 p-2 rounded-lg border-white font-bold mb-4">
              CLOSE
            </button>
          </div>
          <div className="text-black mb-4">
            <label className="text-white block mb-2">Category</label>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setCategory('food')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'food' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Snacks
              </button>
              <button
                onClick={() => setCategory('beverages')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'beverages' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Beverages
              </button>
              <button
                onClick={() => setCategory('desserts')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'desserts' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Desserts
              </button>
              <button
                onClick={() => setCategory('dairies')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'dairies' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Dairies
              </button>
              <button
                onClick={() => setCategory('meats')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'meats' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Meats
              </button>
              <button
                onClick={() => setCategory('spreads')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'spreads' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Spreads
              </button>
              <button
                onClick={() => setCategory('chocolates')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'chocolates' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Chocolates
              </button>
              <button
                onClick={() => setCategory('breads')}
                className={`w-full p-2 border-black border-[3px] rounded ${category === 'breads' ? 'bg-gray-300' : 'bg-white'}`}
              >
                Breads
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
});

export default FilterInput;
