import { gql } from "@apollo/client";

export const displayAuthor = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
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

export const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
