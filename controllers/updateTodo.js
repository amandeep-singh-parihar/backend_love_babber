/* Now the controller have the business logic what will happen if the user hit the specific route */
/* The action which will be performed when hit the specific route, as this controller will be mapped with
a route */

// import the model
const Todo = require("../models/Todo");

// define the route handler (controller)
exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id; // retriving the id from the params
        const { title, description } = req.body; // retriving the title and description from the body

        // Model.findByIdAndUpdate(id, updateObject, options)
        const todo = await Todo.findByIdAndUpdate(
            { _id: id }, // although i can use directly id here, but in the findOneAndUpdate we need {_id : id}
            { title, description, updatedAt: Date.now() }
        );
        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });
    }
};
