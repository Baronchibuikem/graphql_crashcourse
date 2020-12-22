## About Project

I developed this project to get a good grasp of Graphl using the MERN stack. It's a very simple project that emphasizes on how to setup graphql queries and mutation on the backend and consume them on the frontend.

### Technologies used

Node, Express, React, Graphql

##### please note that the .env file was not added along with this project, therefore to run this project, you need to add a .env file in the root of your project and add the following inside it:

    DB_USER='your mongodb username'
    DB_PASSWORD='your mongodb password'
    DB_NAME='database you want to run this on in mongodb'
    MONGO_URI='your mongo uri for connection from mongo(atlas) to your application'
    NODE_ENV = production


###### if you don't want to use online mongo, then you can  change the NODE_ENV variable to development and navigate to the following folder directory "database/keys_dev" and add your database name to the mongoURI variable.
