import React from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@apollo/client";
import {displayAuthor, addBookMutation} from "../../queries/Queries"




function AddBook() {
  const { loading, error, data } = useQuery(displayAuthor);
  const [addBook, { loading: loading2, error: error2 }] = useMutation(addBookMutation)

  const { register, handleSubmit, errors } = useForm();


  const getAuthors = () => {
    if (loading) {
      return <option>Loading Authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author._id} value={author._id}>
            {author.name}
          </option>
        );
      });
    }
  };




  const add_Book = (data) => {
    const {name, genre, authorId} = data
    console.log(data)
    addBook({ variables: { name, genre, authorId} });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(add_Book)} className="col-md-8 mt-5 mx-auto">
      {/* <form > */}
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
          name="authorId"
          ref={register({ required: true })}
          className="form-control"
        >
          <option className="form-control">Select author</option>
          {getAuthors()}
        </select>
        <h6 className="text-left font-italic text-danger">
          {errors.author && errors.author.type === "required" && (
            <p>Author field is required</p>
          )}
        </h6>
        <button
          className="mx-auto form-control my-2 col-sm-12 text-light bg-primary"
          type="submit"
        >
          Add book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
