

const express = require("express");

const port = 3000;

const app = express();


app.get("/",function(req,res){
    res.send("<b>hello world</b>")
})

app.get("/route",function(req,res){
    res.json({
        name:"samrat",
        age:21,
        occupation: "graduated"
    })
})

app.listen(port,function(){
    console.log(`app listening on ${port}`)
})