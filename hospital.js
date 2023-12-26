const express = require("express");
const app = express();

const port = 3000;

//global mini-database where users stores data;
let users = [
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

/**
 * get parameters used to fetch data;
 * we can also use query param for data;
 */

app.use(express.json());

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const numberOfKidneys = jhonKidneys.length;
  const numberOfHealthyKidneys = 0;

  for (const i = 0; i < jhonKidneys.length; i++) {
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

app.post("/",function(req,res){
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// app.delete("/",function(req,res){

// })

// app.put("/",function(){

// })

app.listen(port, function () {
  console.log(`app listening  ${port}`);
});
