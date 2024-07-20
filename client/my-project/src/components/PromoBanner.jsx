import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-300 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards For Fiction Shortlist</h2>
          <Link to="/shop" className='inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-black transition duration-300'>
            Get Promo 
          </Link>
        </div>

        <div className='md:w-1/2 flex justify-end'>
          <img src={bookPic} alt="bookpic" className='w-96' />
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
