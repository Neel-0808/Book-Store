import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Reading Regularly',
      excerpt: 'Reading regularly has many benefits, including reducing stress, improving focus, and expanding knowledge...',
      content: 'Full content of the first blog post...',
      author: 'John Doe',
      date: 'July 16, 2024',
    },
    {
      id: 2,
      title: 'Top 10 Must-Read Books of 2024',
      excerpt: 'Check out our list of the top 10 must-read books of 2024. From fiction to non-fiction, there is something for everyone...',
      content: 'Full content of the second blog post...',
      author: 'Jane Smith',
      date: 'July 15, 2024',
    },
    {
      id: 3,
      title: 'How to Build a Reading Habit',
      excerpt: 'Building a reading habit can be challenging, but with these tips, you can make reading a regular part of your routine...',
      content: 'Full content of the third blog post...',
      author: 'Alice Johnson',
      date: 'July 14, 2024',
    },
  ];

  return (
    <div className='px-4 lg:px-24 bg-teal-300 min-h-screen py-20'>
      <h2 className='text-5xl font-bold text-black leading-snug mb-12 text-center'>
        Our Blog
      </h2>
      <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {blogPosts.map((post) => (
          <div key={post.id} className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-2xl font-bold mb-4'>{post.title}</h3>
            <p className='text-gray-700 mb-4'>{post.excerpt}</p>
            <div className='text-gray-500 text-sm'>
              <p>By {post.author}</p>
              <p>{post.date}</p>
            </div>
            <Link to={`/blog/${post.id}`}>
              <button className='mt-4 bg-blue-700 px-6 py-2 text-white font-medium rounded hover:bg-black transition-all ease-in duration-200'>
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
