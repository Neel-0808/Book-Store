import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
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
          setAllBooks(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(() => {
        alert("Book Deleted Successfully!");
        setAllBooks(allBooks.filter(book => book._id !== id));
      })
      .catch(error => {
        console.error('Delete error:', error);
        alert('Failed to delete the book');
      });
  };

  return (
    <div className='px-4 my-2'>
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Your Books..</h2>

      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$10.00</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit-books/${book._id}`} className="bg-blue-600 px-4 py-1 font-semibold text-white rounded mx-4 hover:bg-red-600">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded mx-4 hover:bg-sky-600'>
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        }
      </Table>
    </div>
  );
}

export default ManageBooks;
