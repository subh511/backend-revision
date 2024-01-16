const express = require("express");
const app = express();

const port = 3000;

//introduce a function whose age is atleast 14yrs old;
//here function is a ticket checker for obtaining the ride who is doing well for function 2 also;
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

//prog-1; 
//prog-2; modified & introduced query Function;

// app.get("/ride1", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have successfully ridden the ride",
//     });
//   } else {
//     res.status(411).json({
//       msg: "you are under age!",
//     });
//   }
// });

// app.get("/ride2", function (req, res) {
//     if (isOldEnough(req.query.age)) {
//       res.json({
//         msg: "you have successfully ridden the ride",
//       });
//     } else {
//       res.status(411).json({
//         msg: "you are under age!",
//       });
//     }
//   });


function isOldEnough(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next()
    }else{
        res.json({
            msg:"Sorry you are under age"
        })
    }
}

app.get("/ride1", isOldEnough, function (req, res) {
    res.json({
      msg: "you have successfully ridden the ride",
    });
});

app.get("/ride2", isOldEnough, function (req, res) {
      res.json({
        msg: "you have successfully ridden the ride",
      });
  });

app.listen(port, function () {
  console.log(`app listening in ${port}`);
});
