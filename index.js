const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})
app.get("/",(req,res)=>{
    res.send("HELLO I AM FROM ROOT")
})
app.get("/apple",(req,res)=>{
    res.send("HELLO I AM APPLE")
})