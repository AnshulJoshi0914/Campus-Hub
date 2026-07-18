
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
const departmentRoutes = require("./routes/departmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/Students", studentRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
    res.send("Backend Server is running.")
});

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`The server is running on Port ${PORT}`)
})