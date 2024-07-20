import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className='px-4 lg:px-24 bg-teal-300 min-h-screen py-20'>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-5xl font-bold text-black mb-4'>{post.title}</h2>
        <div className='text-gray-500 text-sm mb-4'>
          <p>By {post.author}</p>
          <p>{post.date}</p>
        </div>
        <p className='text-lg text-black'>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
