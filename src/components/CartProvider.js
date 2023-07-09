// src/context/CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, calculateSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
