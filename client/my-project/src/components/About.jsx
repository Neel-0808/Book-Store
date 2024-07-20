import React from 'react';
import lap from '../assets/Lap.jpg';

const About = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-300 min-h-screen flex flex-col-reverse md:flex-row items-center py-20'>
      <div className='md:w-1/2 flex justify-start items-center mt-8 md:mt-0 top-10'>
        <img
          src={lap}
          alt='About Us'
          className='rounded-lg shadow-lg w-full md:w-3/4 animate-fadeIn delay-800 '
        />
      </div>
      <div className='md:w-1/2 space-y-8'>
        <h2 className='text-6xl font-bold text-black leading-snug mb-8 animate-fadeIn'>
          About Us
        </h2>
        <p className='text-xl md:text-2xl text-black animate-fadeIn'>
          Welcome to our bookstore, your number one source for all things books. We're dedicated to giving you the very best of reading materials, with a focus on variety, customer service, and uniqueness.
        </p>
        <p className='text-xl md:text-2xl text-black mt-4 animate-fadeIn delay-200'>
          Founded in 2003 by Neel, our bookstore has come a long way from its beginnings in Kalpakkam. When Neel first started out, his passion for helping other parents be more eco-friendly, providing the best equipment for fellow musicians drove him to their passion for promoting literacy and supporting local authors drove them to establish a welcoming and inclusive bookstore., and gave him the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over India, and are thrilled to be a part of the independent bookstore industry.
        </p>
        <p className='text-xl md:text-2xl text-black mt-4 animate-fadeIn delay-400'>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className='text-xl md:text-2xl text-black mt-4 font-bold animate-fadeIn delay-600'>
          Sincerely, <br />
          Neel, Founder
        </p>
      </div>
    </div>
  );
};

export default About;
