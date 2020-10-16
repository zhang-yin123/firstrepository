const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json())
app.use(express.static("www"))
app.use(bodyParser.urlencoded())

app.listen(3000,()=>{
    console.log("服务器运行起来了")
})