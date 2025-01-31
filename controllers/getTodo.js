/* Now the controller have the business logic what will happen if the user hit the specific route */
/* The action which will be performed when hit the specific route, as this controller will be mapped with
a route */

//import the model
const Todo = require("../models/Todo")

//define route handler
exports.getTodo = async(req,res) => {
    try {

        //fetch all todo items from database , syntax -> model_name.find(); 
        // even this is also correct         , suntax -> model_name.find({});
        const todos = await Todo.find({});  // await is important as interaction with the database

        //response
        res.status(200).json({
            success:true,
            data:todos, // Returns the created Todo item
            message:"Entire Todo Data is fetched",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:error.message,
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        //extract todo items on the basis of id
        const id = req.params.id;  //extract the id from the params (url)
        const todo = await Todo.findById(id);

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given ID"
            })
        }
        //data for give id found
        res.status(200).json({
            success:true,
            data:todo, //returns the item with the same id
            message:`Todo ${id} data successfully fetched`,
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