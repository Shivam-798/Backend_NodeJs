

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})


connectDB()
















//import express from "express";
//const app = express();

// connect a database 1st ways

// ( async () => {

//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error", (error) => {
//         console.log("error", error);
//         throw error;
//        })

//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//       }) 
//     }
//     catch (error) {
//         console.error("Error ", error);
//         throw error;
//     }

// })();