require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./Routes/userRoute");

const app = express();

const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("<h1>This is home page baby !!...</h1>")
})

// routes
app.use("/api/v1",userRoute);

// DB connection
connectDB();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})