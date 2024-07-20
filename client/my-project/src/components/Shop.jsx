import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { CartContext } from '../contects/CartProvider';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Handle error state here if needed
      });
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10'>All Books are Here..</h2>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
        {books.map(book => (
          <Card key={book.id} href="#" className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
            <img src={book.imageUrl} alt="Book Cover" className='h-96 w-full object-cover object-center' />
            <div className='p-6'>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2'>
                {book.bookTitle}
              </h5>
              <p className='text-base text-gray-700 dark:text-gray-400 mb-4 overflow-hidden overflow-ellipsis'>
                {book.bookDescription.slice(0, 80)}{book.bookDescription.length > 80 && '...'}
              </p>
              <button 
                className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'
                onClick={() => addToCart(book)} // Add to cart
              >
                Add to Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
