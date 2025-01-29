//import the model
const Todo = require("../models/Todo");

//define the route handler

exports.createTodo = async(req, res) => {
    try {
        // Step 1: Extract 'title' and 'description' from the request body
        const {title, description} = req.body
        // Step 2: Create a new Todo document and insert it into the database
        const response = await Todo.create({title,description})
         // Step 3: Send a JSON response with a success flag and the created data
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully"
            }
        )
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            message:"An error occurred",
            error: err.message
        })
    }
}

//also use
//module.exports = createTodo;