import React, { useState } from 'react';
import BannerCard from './BannerCard';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/all-books?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setBooks([]);
    }
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-300 min-h-screen'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40 md:py-20'>
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-5xl font-bold text-black leading-snug'>
            Buy and Sell Your Books <span className='text-blue-700'>For the Best Prices</span>
          </h2>
          <p className='md:w-4/5 text-2xl '>
Books are a uniquely portable magic.
They can transport you to distant lands,
they can ignite your imagination,
and they can soothe your soul.          </p>
          <div className='flex gap-2'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search a Book'
              className='py-2 px-2 rounded-s-sm outline-none w-full md:w-auto'
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {books.length > 0 && (
            <div className='mt-4'>
              <h3 className='text-2xl font-bold'>Search Results:</h3>
              <ul>
                {books.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
