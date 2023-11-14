import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./component/Form";
import Table from "./component/Table";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "Book1",
      bookAuthor: "John Doe",
      bookIsbn: "00264",
      bookId: uuid(),
    },
  ]);

  // functions
  const invalidInputs =
    title.trim() === "" || author.trim() === "" || isbn.trim() === "";

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };
  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuid(),
      },
    ]);
  };
  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? {
              ...books,
              bookTitle: title,
              bookAuthor: author,
              bookIsbn: isbn,
              bookId: currentBookId,
            }
          : book
      )
    );
    setCurrentBookId(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (invalidInputs) return;
    !currentBookId ? addBook() : updateBook();
    clearInputs();
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  return (
    <div className="container">
      <Form
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        isbn={isbn}
        setIsbn={setIsbn}
        currentBookId={currentBookId}
        handleSubmit={handleSubmit}
        // updateBook={updateBook}
        // setCurrentBookId={setCurrentBookId}
      />

      <Table books={books} removeBook={removeBook} editBook={editBook} />
    </div>
  );
}

export default App;
