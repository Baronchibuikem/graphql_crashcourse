import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../../queries/Queries";

function Book({ id }) {
  console.log(id, "from book detail");
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id },
  });

  console.log(data, "data");
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

  return (
    <div>
      <h5>Book Name: {data.book.name}</h5>
      <p>Genre: {data.book.genre}</p>
      <p>Author: {data.book.author.name}</p>
      <p>Author age: {data.book.author.age}</p>

      {data.book.author.books.map((book) => {
        return (
          <ul>
            <li key={data.book.id}>
              Other books by {data.book.author.name}: {book.name}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Book;
