import React from 'react';
import { Link } from 'react-router-dom';
import FavBookImg from "../assets/favoritebook.jpg";

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
        <p className='mb:-10 text-lg md:w-5/6'>A room without books is like a body without a soul.
In the pages of a book, you find endless adventures,
untold secrets, and the wisdom of ages.
Books are windows to a world beyond our own. </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 my-14'>
          <div className='text-right'>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listings</p>
          </div>
          <div className='text-right'>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Registered Users</p>
          </div>
          <div className='text-right'>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF Downloads</p>
          </div>
        </div><Link to="/shop" className='inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-black transition duration-300'>
            Explore Now
          </Link>
        <div className='text-left'>
          
        </div>
      </div>
    </div>
  );
}

export default FavoriteBook;
