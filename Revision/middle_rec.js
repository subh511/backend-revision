const express = require("express");
const app = express();

const port = 3000;


function isOldEnough(req,res,next){
    let age = req.query.age;

    if(age>=14){
        next()
    }else{
        res.json({
            msg: "sorry you are underage!"
        })
    }
}

app.use(isOldEnough)

app.get("/ride1",function(req,res){
    res.json({
        msg: "you have successfully riden the ride"
    })
})

app.get("/ride2",function(req,res){
    res.json({
        msg: "you have successfully riden the ride"
    })
})

app.listen(port,function(){
    console.log(`app listening on port ${port}`)
})