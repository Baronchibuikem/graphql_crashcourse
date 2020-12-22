import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useForm } from "react-hook-form";

const displayAuthor = gql`
  query {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  const { loading, error, data } = useQuery(displayAuthor);
  const { register, handleSubmit, errors } = useForm();

  if (error)
    return (
      <div className="alert alert-success" role="alert">
        Error :(
      </div>
    );

  // const auth = () => { return data.authors.map((book) => (
  //   <div key={book.id}>
  //     <p>
  //       {book.name}
  //     </p>
  //   </div>
  // ))}

  const getAuthors = () => {
    if (loading) {
      return <option>Loading Authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit(loginSubmit)}> */}
      <form className="col-md-8 mt-5 mx-auto">
        <div
          className="text-uppercase text-center font-weight-bold"
          style={{ fontSize: "20px" }}
        >
          Add Book
        </div>

        <input
          type="text"
          className="form-control p-4 w-100"
          placeholder="Book name"
          name="name"
          ref={register({ required: true })}
        />
        <h6 className="text-left font-italic text-danger">
          {errors.name && errors.name.type === "required" && (
            <p>Book Name is required</p>
          )}
        </h6>
        <input
          type="text"
          className="form-control p-4 w-100"
          placeholder="Genre"
          name="genre"
          ref={register({ required: true })}
        />
        <h6 className="text-left font-italic text-danger">
          {errors.genre && errors.genre.type === "required" && (
            <p>Genre field is required</p>
          )}
        </h6>

        <select
          name="author"
          ref={register({ required: true })}
          className="form-control"
        >
          {/* <option>Select author</option> */}
          {getAuthors()}
        </select>
        <h6 className="text-left font-italic text-danger">
          {errors.author && errors.author.type === "required" && (
            <p>Author field is required</p>
          )}
        </h6>
        <button
          className="mx-auto px-5 py-3 my-2 col-sm-12 text-light"
          type="submit"
          style={{ backgroundColor: "gray" }}
        >
          AddBook
        </button>
      </form>
    </div>
  );
}

export default AddBook;
