import { useState, useEffect } from 'react';
import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';

const categories = [
  "Fiction", "Non-fiction", "Mystery", "Fantasy", "Biography", 
  "Science Fiction", "Romance", "Thriller", "Historical", "Self-help", 
  "Health", "Travel", "Children's", "Religion", "Science", 
  "Cooking", "Art", "Poetry"
];

const EditBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookData = useLoaderData();

  const [formData, setFormData] = useState({
    authorName: '',
    imageUrl: '',
    category: '',
    bookDescription: '',
    bookTitle: '',
    bookPdfUrl: '',
    showDropdown: false
  });

  useEffect(() => {
    if (bookData) {
      const { bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = bookData;
      setFormData({
        authorName,
        imageUrl,
        category,
        bookDescription,
        bookTitle,
        bookPdfUrl,
        showDropdown: false
      });
    }
  }, [bookData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category, showDropdown: false });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/updatebook/${id}`, {
      method: 'PATCH', // Ensure the method is PATCH
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        alert('Book updated successfully!');
        navigate('/admin/dashboard'); // Redirect to the dashboard or any other route after successful update
      })
      .catch((error) => {
        console.error('Update error:', error);
        alert('Failed to update the book');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-blue-200 shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Update the Book Data..</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              defaultValue={formData.authorName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={formData.imageUrl}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <div className="relative">
              <input
                type="text"
                name="category"
                defaultValue={formData.category}
                onChange={handleChange}
                onClick={() => setFormData({ ...formData, showDropdown: !formData.showDropdown })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
                placeholder="Select category"
                required
              />
              {formData.showDropdown && (
                <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {categories.map((cat, index) => (
                    <p
                      key={index}
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleCategorySelect(cat)}
                    >
                      {cat}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookDescription">
              Book Description
            </label>
            <textarea
              name="bookDescription"
              defaultValue={formData.bookDescription}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500 h-40"
              placeholder="Enter book description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookTitle">
              Book Title
            </label>
            <input
              type="text"
              name="bookTitle"
              defaultValue={formData.bookTitle}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
              placeholder="Enter book title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookPdfUrl">
              Book PDF URL
            </label>
            <input
              type="text"
              name="bookPdfUrl"
              defaultValue={formData.bookPdfUrl}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
              placeholder="Enter book PDF URL"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 w-full"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBooks;
