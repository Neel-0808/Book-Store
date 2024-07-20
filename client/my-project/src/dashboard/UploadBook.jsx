import React, { useState } from 'react';

const categories = [
  "Fiction", "Non-fiction", "Mystery", "Fantasy", "Biography", 
  "Science Fiction", "Romance", "Thriller", "Historical", "Self-help", 
  "Health", "Travel", "Children's", "Religion", "Science", 
  "Cooking", "Art", "Poetry"
];

const UploadBook = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    imageUrl: '',
    category: '',
    bookDescription: '',
    bookTitle: '',
    bookPdfUrl: '',
    showDropdown: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category, showDropdown: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/uploadbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Book successfully uploaded!');
        setFormData({
          authorName: '',
          imageUrl: '',
          category: '',
          bookDescription: '',
          bookTitle: '',
          bookPdfUrl: '',
          showDropdown: false
        }); // Reset form fields
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error scenario or show error message
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-blue-200 shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Book..</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
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
              value={formData.imageUrl}
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
                value={formData.category}
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
              value={formData.bookDescription}
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
              value={formData.bookTitle}
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
              value={formData.bookPdfUrl}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:border-blue-500"
              placeholder="Enter book PDF URL"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 w-full"
          >
            Submit
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default UploadBook;
