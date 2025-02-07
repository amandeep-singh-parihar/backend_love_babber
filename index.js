const express = require("express"); // import the express
const app = express(); // create the express app

// load config from .env file -> it will load the config from the env file and load it into the process object
require("dotenv").config();
const PORT = process.env.PORT || 8000; // if the port not fetched correctly then use port number as 8000

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount the todo API routes (mount)->append
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server started at port at : ${PORT}`);
});

// connection to the db
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send(`<h1>Is This working</h1>`);
});
