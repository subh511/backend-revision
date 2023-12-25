
const express = require("express");

const app = express();

const port = 3000;

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// we can write in either ways
app.get('/',function(req,res){
    res.send('Hello World!')
})

app.get('/route',function(req,res){
    res.json({
        name:"samrat",
        age:21,
        occupation:"graduated"
    })
})


app.listen(port, ()=>{
    console.log(`Example app is listening on ${port}`)
});