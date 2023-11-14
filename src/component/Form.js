import React from "react";
import "../App.css";
const Form = ({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setIsbn,
  currentBookId,
  handleSubmit,
  updateBook,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="center">
        <div className="formInputs">
          <section className="inputs">
            <label style={{ fontSize: "1.2rem" }}>Book-Title</label>
            <input
              className="input"
              type="text"
              autoFocus
              placeholder="Book-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label style={{ fontSize: "1.2rem" }}>Author</label>
            <input
              className="input"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label style={{ fontSize: "1.2rem" }}>ISBN#</label>
            <input
              className="input"
              type="text"
              placeholder="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
            <button
              style={{
                marginTop: "2rem",
                padding: "0.5rem 0",
                fontSize: "1.2rem",
              }}
              type="submit"
            >
              {currentBookId !== null ? "Update" : "Add"}
            </button>
            {currentBookId !== null && (
              <button
                style={{
                  padding: "0.5rem 0",
                  fontSize: "1.2rem",
                }}
              >
                Cancel
              </button>
            )}
          </section>
        </div>
      </div>
    </form>
  );
};

export default Form;
