import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../../queries/Queries";
import Book from "./Book";

function Booklist() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="spinner-border "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only spinner-style">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-success" role="alert">
        Error :(
      </div>
    );

  const getBooks = () => {
    return data.books.map((book) => {
      return (
        <div className="col-md-4" key={book.id}>
          <button
            className="shadow card p-3"
            onClick={(e) => setSelected(book.id)}
          >
            {book.name}
          </button>
        </div>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="row">{getBooks()}</div>
      </div>
      <div className="col-md-6">{!selected ? "" : <Book id={selected} />}</div>
    </div>
  );
}

export default Booklist;
