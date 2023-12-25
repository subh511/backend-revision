const express = require("express");
const app = express();

const port = 3000;

const users = [
  {
    name: "jhon",
    kidneys: [
      {
        healthy: false,
      },
    //   {
    //     healthy: true,
    //   },
    ],
  },
];

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const numberOfKidneys = jhonKidneys.length;
  const numberOfHealthyKidneys = 0;

  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// app.post("/",function(req,res){

// })

// app.delete("/",function(req,res){

// })

// app.put("/",function(){

// })

app.listen(port, function () {
  console.log(`app listening  ${port}`);
});
