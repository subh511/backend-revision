// const express = require("express");

// const app = express();

// const port = 3000;

// let arr = [1,2,3,4,5]
// function even(n){
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i] % n == 0){
//             return true
//         }else{
//             return false
//         }
// }
// }
// app.get("/",function(req,res){
//     let calculate = req.query.n;
//     let ans = even(calculate);
//     res.send("your answer is: " + ans)
// })

// app.listen(port,function(){
//     console.log(`app listening on ${port}`)
// })

const express = require("express");

const port = 3000;

const app = express();

app.use(express.json());

let users = [
  {
    name: "jhon",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  let jhonKidneys = users[0].kidneys;
  let numberOfKidneys = jhonKidneys.length;
  let numberHealthyKidney = 0;

  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].length) {
      numberHealthyKidney = numberHealthyKidney + 1;
    }
  }

  let numberOfUnhealthyKidneys = numberOfKidneys - numberHealthyKidney;

  res.json({
    numberOfUnhealthyKidneys,
    numberOfKidneys,
    numberHealthyKidney,
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  let isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys.healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  let newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].length) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "done",
  });
});

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});
