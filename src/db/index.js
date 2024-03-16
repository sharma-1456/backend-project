import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectedDB=async ()=>{
    try {
        const connectionInstence=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionInstence.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error :",error);
        process.exit(1)
    }
}

export default connectedDB