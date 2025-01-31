/* Now the controller have the business logic what will happen if the user hit the specific route */
/* The action which will be performed when hit the specific route, as this controller will be mapped with
a route */

//import the model
const Todo = require("../models/Todo");

//define the controller (route handler)

exports.deleteTodo = async (req,res) => {
    try {
        const id = req.params.id;     //now we retriving the id from the params (from the url)
        const todo = await Todo.findByIdAndDelete(id);      //using await as interaction with the DB
        if(!todo){                                          //if the todo don't exist
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