import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "../../index.css";

const getBooksQuery = gql`
  query {
    books {
      name
      id
      genre
      author {
        name
      }
    }
  }
`;

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
      <div class="alert alert-success" role="alert">
        Error :(
      </div>
    );

  return data.books.map((book) => (
    <div key={book.id}>
      <p>
        {book.author.name} is the writer of {book.name} that belongs to{" "}
        {book.genre} genre
      </p>
    </div>
  ));
}

export default Booklist;
