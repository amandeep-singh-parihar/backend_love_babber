//import the model
const Todo = require("../models/Todo");

//define the controller
exports.deleteTodo = async (req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Foudn with given ID"
            })
        }
        //data for given id found
        res.status(200).json({
            success:true,
            message:"Todo Deleted",
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