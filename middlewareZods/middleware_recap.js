const express = require("express");
const app = express();

const port = 3000;

//introduce a function whose age is atleast 14yrs old;
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

//prog-1; 
//prog-2; modified & introduced query Function;

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "you have successfully ridden the ride",
    });
  } else {
    res.status(411).json({
      msg: "you are under age!",
    });
  }
});

app.post("/", function (req, res) {});

app.listen(port, function () {
  console.log(`app listening in ${port}`);
});
