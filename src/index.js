const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require("./config/server.config.js")
const app = express();

app.use(bodyParser.json()); // json input allow 
app.use(bodyParser.urlencoded({ 
    extended:true
}));
app.use(bodyParser.text());

app.get("/ping",(req,res)=>{
    return res.send("pong");
})
app.listen(PORT,()=>{
    console.log(`our app is listening at port localhost:${PORT}`)
})