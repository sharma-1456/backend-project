// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectedDB from "./db/index.js";


dotenv.config({
    path:"./env"
})
connectedDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runinig at port: ${process.env.PORT}`);
        app.on("error",()=>{
            console.log("err",error);
            throw error;
        })
    })
})
.catch((error)=>{
    console.log(`MONGOdb connection failed:${error}`);
})










//first method to connectDB 
/*
import mongoose from "mongoose";
 import { DB_NAME } from "./constants";
import express from "express"
const app=express()

( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR",error)
        throw error 

        
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listining on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err 
    }
})()
*/