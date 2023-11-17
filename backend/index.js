require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("<h1>This is home page baby !!...</h1>")
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})