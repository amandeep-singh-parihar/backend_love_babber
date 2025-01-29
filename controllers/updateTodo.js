//step 1: take the model
const Todo = require("../models/Todo");

//step 2: define the route handler

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt: Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"Updated Successfully",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error",
        });
    }
}