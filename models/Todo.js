const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        /*
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
        */
        //No use of the above the above do the same as below timestamsp:true
    }, { timestamps: true }
);


module.exports = mongoose.model("Todo",todoSchema);

// export const Todo = mongoose.model('Todo', todoSchema);
// use the above commented one if use the module type