const express = require("express")
const { graphqlHTTP} = require('express-graphql')
const schema = require("./graphql/schema/schema")
require('dotenv').config()


const app = express()

// DB Config
const connectDB = require("./database/db_connect");

// Connect to MongoDB
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, ()=>{
    console.log("now listening for request on port 4000")
})
