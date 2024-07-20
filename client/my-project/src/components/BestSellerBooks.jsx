import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setBooks(data.slice(0,8));
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <BookCard books={books} headline="Best Seller Books" />;
}

export default BestSellerBooks;
