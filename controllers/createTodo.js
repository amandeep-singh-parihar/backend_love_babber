/* Now the controller have the business logic what will happen if the user hit the specific route */
/* The action which will be performed when hit the specific route, as this controller will be mapped with
a route */

//import the model
const Todo = require("../models/Todo");

//define the route handler
exports.createTodo = async (req, res) => {
    try {
        // Step 1: Extract 'title' and 'description' from the request body
        const { title, description } = req.body;
        // Step 2: Create a new Todo document and insert it into the database
        const response = await Todo.create({ title, description });
        // Step 3: Send a JSON response with a success flag and the created data
        res.status(200).json({
            success: true,
            data: response, //Returns the created Todo item
            message: "Entry created Successfully",
        });
    } catch (err) {
        console.error(err); // console the error
        console.log(err);
        res.status(500).json({
            //send the 500 response
            success: false, //mark the success flag false
            message: "An error occurred", //show the messege
            error: err.message,
        });
    }
};

//also use
//module.exports = createTodo;
