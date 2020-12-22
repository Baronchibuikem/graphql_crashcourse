import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookList from "./component/Book/Booklist"
import AddBook from "./component/Book/AddBook";

// apollo client setup

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container mt-5 pt-5 mx-auto">
      <BookList/>
      <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
