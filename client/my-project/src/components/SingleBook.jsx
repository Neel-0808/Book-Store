import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoMdBook } from 'react-icons/io'; // For the "Read Book" icon

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, rating, authorName, bookDescription } = useLoaderData();

  // Generate an array of stars for the rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className="h-6 w-6 text-yellow-400 "
    />
  ));

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex flex-col items-center lg:flex-row lg:items-start'>
        <img src={imageUrl} alt={bookTitle} className='h-96 w-auto rounded-lg shadow-lg' />
        <div className='lg:ml-8 mt-4 lg:mt-0'>
          <h2 className='text-4xl font-bold'>{bookTitle}</h2>
          <p className='text-xl text-gray-600 mt-2'>{authorName}</p>
          <div className='flex mt-2'>
            {stars}
          </div>
          <p className='text-gray-700 mt-4'>{bookDescription}</p>
          <div className='mt-6'>
            <button className='bg-blue-500 text-white rounded-md px-6 py-2 flex items-center gap-2 hover:bg-blue-600'>
              <IoMdBook className='text-lg' />
              Read Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
