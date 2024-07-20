import { useState,useEffect } from "react";
import React from 'react'
import BookCard from "./BookCard";

const OtherBokks = () => {
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
          setBooks(data.slice(0,10));
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

  return <BookCard books={books} headline="Other Books" />;
}

export default OtherBokks
