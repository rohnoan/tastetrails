import React from 'react';

export default function Product({ index, name, category, ingredients, grade, image }) {
  const grades = [
    { grade: 'A', color: 'bg-green-700' },
    { grade: 'B', color: 'bg-green-300' },
    { grade: 'C', color: 'bg-yellow-500' },
    { grade: 'D', color: 'bg-orange-500' },
    { grade: 'E', color: 'bg-red-500' },
  ];

  

  return (
    <div className="flex border-2 border-[#001B2E] mt-[40px] bg-white flex-col rounded-lg w-full 
    sm:w-[250px] 
    
    md:w-[260px] 
    lg:w-[330px] 
    h-[400px]" key={index}>
      <div className="flex-[2] flex justify-center items-center overflow-hidden">
        <div className="h-full">
          <img className="p-4 w-full h-full object-contain" src={image} alt={name} />
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="text-lg">
          {name} 
        </div>
        <div className="text-[13px]">
          <div className='break-words'>Category : {category.split(' ').slice(0,5).join(' ')}</div>
          
          <div className='flex justify-start items-center flex-row'>
          <div className='mr-[10px]'>
            GRADE : 
            {console.log(grade)}
          </div>
        
          <div className={`border-2 border-black w-[50px] ${grades.find(item => item.grade === grade.toUpperCase())?.color} text-center`}>
            {grade.toUpperCase()}
          </div>
          </div>
          


          <div className='flex justify-center text-center'>
          <button className='m-[10px] bg-blue-500 w-[140px] border-black p-1 rounded-xl border-2'>
            ADD TO CART
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
