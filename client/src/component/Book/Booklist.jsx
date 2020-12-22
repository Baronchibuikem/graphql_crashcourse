import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../../queries/Queries";

function Booklist() {
  const { loading, error, data } = useQuery(getBooksQuery);

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

  return data.books.map((book) => (
    <div key={book._id}>
      <p>
        {book.author.name} is the writer of {book.name} that belongs to{" "}
        {book.genre} genre
      </p>
    </div>
  ));
}

export default Booklist;
