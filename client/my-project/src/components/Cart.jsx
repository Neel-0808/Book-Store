import React, { useContext, useState } from 'react';
import { CartContext } from '../contects/CartProvider';

const Cart = () => {
  const { cartItems, buyNow } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total amount dynamically
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += 10 * item.quantity; // Assuming each item costs $10
    });
    return total;
  };

  // Handle Buy Now action
  const handleBuyNow = () => {
    buyNow();
    setOrderPlaced(true);
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-12'>
          {cartItems.map((item, index) => (
            <div key={index} className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
              <img src={item.imageUrl} alt="Book Cover" className='h-96 ' />
              <div className='p-6'>
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2'>
                  {item.bookTitle}
                </h5>
                <p className='text-base text-gray-700 dark:text-gray-400 mb-4'>
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className='col-span-2'>
            <div className='bg-gray-200 p-4 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>Total Amount: ${calculateTotalAmount().toFixed(2)}</h3>
              {!orderPlaced && (
                <button 
                  className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              )}
              {orderPlaced && (
                <h2 className='text-xl text-green-600 font-semibold'>Order placed successfully!</h2>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
