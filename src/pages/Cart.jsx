import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <p>Empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex mb-4 p-4 border-b">
              <img
                src={item.image_url} 
                alt={item.product_name} 
                className="w-20 h-20 object-contain mr-4"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold">{item.product_name}</h3> 
                <p>Category: {item.category}</p>
                <p>Grade: {item.grade}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
