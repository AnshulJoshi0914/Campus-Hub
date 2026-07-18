const express = require('express');
const cors=require('cors');
const dotenv=require("dotenv");
const connectDB= require("./config/db");
dotenv.config();
const app=express();
connectDB();
app.use(cors());
app.use(express.json());
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/Students", studentRoutes);
app.get("/",(req,res)=>{
    res.send("Backend Server is running.")
});

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`The server is running on Port ${PORT}`)
})