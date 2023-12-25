const express = require("express");

const app = express();

const port = 3000;

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/",function(req,res){
    let calculate = req.query.n;
    let ans = sum(calculate);
    res.send("hi your answer is:" + ans)
})

app.listen(port, function () {
  console.log(`app listening on ${port}`);
});



// app.get("/",function(req,res){
//     res.send("hi there")
// })

// function calculate(n){
//     return n*n;
// }

// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })