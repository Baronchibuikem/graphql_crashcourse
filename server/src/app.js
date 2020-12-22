const express = require("express")
const { graphqlHTTP} = require('express-graphql')
const schema = require("./graphql/schema/schema")
require('dotenv').config()
const cors = require("cors")


const app = express()

// allow cross origin request
app.use(cors())

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
