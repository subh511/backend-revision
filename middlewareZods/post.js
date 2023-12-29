/**
 * usecases of post method;
 * why we use app.use(express.json())
 * ---> count the number of requests;
 */

const express = require("express");
const port = 3000;

const app = express();

let number = 0;

function calculate(req, res, next) {
  number++;
  console.log(number);
  next();
  //next() is for run the next function and excute it; it just like
  //chain of narration to continue the function;
}

app.use(calculate);
//when this is called it excutes the second function;
//after it is called;

app.post("/health-checkup", function (req, res) {
  res.json({
    msg: "keep on adding!",
  });
});

app.listen(port, function () {
  console.log(`app listening in port${port}`);
});


