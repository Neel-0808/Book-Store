import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const buyNow = () => {
    // Implement buy now logic (e.g., place order, clear cart, etc.)
    setCartItems([]);
    alert('Order placed successfully!');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};
