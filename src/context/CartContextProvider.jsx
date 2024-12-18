import CartContext from "./CartContext";
import React from 'react'
import { useState } from "react";


export default function CartContextProvider({children}) {

    const[cart,setCart]=useState([]);
    const addToCart=(product,quantity)=>{
        setCart((prevCart)=>{
            const existing = prevCart.find((item)=>{
                item.id===product.id
            });
            if(existing){
                return prevCart.map((item)=>
                item.id===product.id?
                {...item,quantity:item.quantity+quantity}
                :item
            );
            }
            return [...prevCart,{...product,quantity}]
        });
    };
  return (
    
      <CartContext.Provider
      value={{cart,addToCart}}
      >
        {children}
      </CartContext.Provider>
  
  )
}
