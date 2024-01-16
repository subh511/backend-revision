const express = require("express");
const app = express();

const port = 3000;

//introduce a function whose age is atleast 14yrs old;
function isOldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}

//prog-1;
app.get("/ride1", function (req, res) {
  res.json({
    msg: "you have successfully ridden the ride",
  });
});

app.post("/", function (req, res) {});

app.listen(port, function () {
  console.log(`app listening in ${port}`);
});
