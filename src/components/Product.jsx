import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
export default function Product({ index, id, name, category, grade, image }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const grades = [
    { grade: 'A', color: 'bg-green-700' },
    { grade: 'B', color: 'bg-green-300' },
    { grade: 'C', color: 'bg-yellow-500' },
    { grade: 'D', color: 'bg-orange-500' },
    { grade: 'E', color: 'bg-red-500' },
  ];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      console.log("Adding to cart:", { id, product_name: name, category, grade, image_url: image });
      addToCart({ id, product_name: name, category, grade, image_url: image }, quantity);
    }
  };
  

  return (
    <div
    onClick={(e)=>{e.stopPropagation()}}
    className="flex border-2 border-[#001B2E] mt-[40px] bg-white flex-col rounded-lg w-full sm:w-[250px] md:w-[260px] lg:w-[330px] h-[400px]" key={index}>
      <div className="flex-[2] flex justify-center items-center overflow-hidden">
        <div className="h-full">
          <Link to={`/products/${id} `} className="w-full h-full">
          <img className="p-4 w-full h-full object-contain hover:scale-105 transition-transform duration-300" src={image} alt={name} />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="text-lg">{name}</div>
        <div className="text-[13px]">
          <div className='break-words'>Category: {category.split(' ').slice(0, 5).join(' ')}</div>
          <div className='flex justify-start items-center flex-row'>
            <div className='mr-[10px]'>GRADE:</div>
            <div className={`border-2 border-black w-[50px] ${grades.find(item => item.grade === grade.toUpperCase())?.color} text-center`}>
              {grade.toUpperCase()}
            </div>
          </div>

         
          <div className="flex border-red justify-center text-center">
            <div
            onClick={(e)=>{e.preventDefault(); e.nativeEvent.stopImmediatePropagation();}}
            className="flex items-center m-[4px] sm:m-[25px] border-black bg-gray-200 p-1 rounded-xl border-2">
              <button
                onClick={(e) => { e.stopPropagation(); decrementQuantity(); }}
                className="bg-red-500 text-white w-[15px] sm:w-[40px] rounded-l-xl"
              >
                -
              </button>
              <div className="w-[20px] md:w-[60px] text-center">{quantity}</div>
              <button
                onClick={(e) => { e.stopPropagation(); incrementQuantity(); }}
                className="bg-green-500 text-white w-[15px] sm:w-[40px] rounded-r-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="m-[4px] bg-blue-500 w-[40px] sm:w-[140px] border-black p-1 rounded-xl border-2"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
