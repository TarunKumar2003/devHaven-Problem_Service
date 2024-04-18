const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require("./config/server.config.js")
const  apiRouter  = require("./routes");
const errorHandler = require("./utils/errorHandler.js");
const app = express();

app.use(bodyParser.json()); /// json input allow 
app.use(bodyParser.urlencoded({ 
    extended:true
}));
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.get("/ping",(req,res)=>{
    return res.send("pong");
})

// Last middlewre for error handling 
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`our app is listening at port localhost:${PORT}`)
})