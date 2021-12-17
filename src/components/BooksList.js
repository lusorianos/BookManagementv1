import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';



const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table" id="myTable">
          <thead>
            <tr>
              <th scope="col">Title </th>
              <th scope="col">Author</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">ISBN#</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="book-list">
            {!_.isEmpty(books) ? (
              books.map((book) => (
                <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
              ))
            ) : (
              <p className="message">No books available. Please add some books.</p>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default BooksList;