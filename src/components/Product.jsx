import React from 'react';

export default function Product({ index, name, category, ingredients, grade, image, price }) {
  return (
    <div className="flex  border-2 border-[#001B2E] mt-[40px] bg-white flex-col rounded-lg w-full sm:w-[300px] md:w-[350px] h-[400px]" key={index}>
      <div className="flex-[2] flex justify-center items-center overflow-hidden">
        <div className="h-full">
          <img className="p-4 w-full h-full object-contain" src={image} alt={name} />
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="text-lg">
          {name} {price}
        </div>
        <div className="text-xs">
          <div>{category}</div>
          <div>{ingredients ? <p>{ingredients}</p> : <p>Ingredients not available</p>}</div>
          <div>{grade}</div>
        </div>
      </div>
    </div>
  );
}
