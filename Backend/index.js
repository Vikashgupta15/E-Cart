import express from "express";      // Used to Sarve Data
import dotenv from "dotenv";        // Used to hide important data
import mongoose from "mongoose";    // Database
import cors from "cors";            // used to communicate cross port b/w Frontend and Backend
import laptopRoute from "./route/laptop.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT || 3000;
const DB_URL = process.env.MongoDBURL;

//Connect to MONGO-DB
try {
    mongoose.connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("HII Golden, Mongoose is Connected");
} catch (error) {
    console.log("Error: ",error); 
}

// Defining Routes
app.use("/laptop", laptopRoute);
app.use("/user", userRoute);



// app.get("/",(req,res)=>{
//     res.send("Hello Golden, Server is Started")
// });

app.listen(port,()=>{
    console.log(`App listening on port : ${port}`)
});