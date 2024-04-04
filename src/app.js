
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
     //isline ka matlab hai ki kon ap se backend ko listen karega unka url
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(cookieParser())
app.use(express.static("public"))


//routes import

import userRouter from './routes/user.routes.js'

//routes declaration

app.use("/api/v1/users", userRouter)
//api hai jo ki version 1 hai
//http://localhost:8000/api/v1/users/register

export {app};