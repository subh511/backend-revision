

const express = require("express");

const port = 3000;

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());


app.post("/",function(req,res){
    //console.log(req.headers);
    console.log(req.body);
    //console.log(req.headers["authorization"]);
    // res.send({
    //     msg: "2 + 2 = 4",
    // })
    res.send("hello world")
})
// app.get("/",function(req,res){
//     res.send("<b>hello world</b>")
// })

// app.get("/route",function(req,res){
//     res.json({
//         name:"samrat",
//         age:21,
//         occupation: "graduated"
//     })
// })

app.listen(port,function(){
    console.log(`app listening on ${port}`)
})