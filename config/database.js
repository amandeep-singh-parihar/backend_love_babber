const mongoose = require("mongoose"); //instance of mongoose

require("dotenv").config(); //isse jo bhi maine .env mai likha hoga wo load hojayega process object k ander load ho jayega

//below is the function which connect the db with the application
const dbConnect = () => {
    mongoose
        .connect(process.env.DATABASE_URL, {
            // now how the .env comes in the process folder, for that we use .env library
            // now i can use the DATABASE_URL for the .env file
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB connection SUCCESSFUL")) //if everything go well then DB connected successfully
        .catch((err) => {
            //if there is an error it will catch here
            console.log("DB connection FAILED");
            console.log(err.message);
            process.exit(1);
            /* 
         In Node.js, process.exit(1) is used to terminate the current running process and indicate that
         the program has ended with an error. The 1 passed to process.exit() is the exit code, which is 
         typically used to signal that something went wrong.
         An exit code of 0 usually means the program finished successfully.
         An exit code of 1 (or any non-zero number) indicates that the program encountered an error or 
         something unexpected happened. 
        */
        });
};

module.exports = dbConnect;
//using module.exports , exports the dbConnect function
