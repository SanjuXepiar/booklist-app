import React from "react";
import TableField from "./TableField";
const Table = ({ books, editBook, removeBook }) => {
  return (
    <section className="center">
      <div className="table">
        <div className="tableHeading">
          <TableField fieldName="Title" />
          <TableField fieldName="Author" />
          <TableField fieldName="ISBN#" />
          <TableField fieldName="Settings" />
        </div>
        {books.map((book) => {
          return (
            <div key={book.bookId} className="tableRow">
              <TableField fieldName={book.bookTitle} />
              <TableField fieldName={book.bookAuthor} />
              <TableField fieldName={book.bookIsbn} />
              <TableField
                fieldSetting
                editBook={() => editBook(book)}
                removeBook={() => removeBook(book.bookId)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Table;
