import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from "flowbite-react";
import proPic1 from '../assets/profile.jpg';
import proPic2 from '../assets/profile.jpg';
import proPic3 from '../assets/profile.jpg';
import proPic4 from '../assets/profile.jpg';

import { FaStar } from 'react-icons/fa6';

const ReviewBook = () => {
  const reviews = [
    {
      id: 1,
      text: "Fantastic service and a great selection of books. I found exactly what I was looking for and more!",
      name: "Jane Doe",
      position: "Book Lover",
      img: proPic1
    },
    {
      id: 2,
      text: "The customer support was amazing. They helped me find a rare book I've been searching for years.",
      name: "John Smith",
      position: "Avid Reader",
      img: proPic2
    },
    {
      id: 3,
      text: "A wonderful experience from start to finish. The books arrived quickly and in perfect condition.",
      name: "Emily Johnson",
      position: "Bibliophile",
      img: proPic3
    },
    {
      id: 4,
      text: "Great prices and a huge variety of genres. I love the recommendations and the user-friendly website.",
      name: "Michael Brown",
      position: "Literature Enthusiast",
      img: proPic4
    }
  ];

  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border'>
              <div className='space-y-6'>
                <div className='text-orange-500 flex gap-2'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='mt-7'>
                  <p className='mb-5'>{review.text}</p>
                  <Avatar img={review.img} alt={`avatar of ${review.name}`} rounded className='w-10 mb-4' />
                  <h5 className='text-lg font-medium'>{review.name}</h5>
                  <p className='text-base'>{review.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewBook;
