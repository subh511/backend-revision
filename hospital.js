const express = require("express");
const app = express();

const port = 3000;

//global mini-database where users stores data;
var users = [
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
 * GET parameters used to fetch data;
 * we can also use query param for data;
 */

app.use(express.json());

app.get("/", function (req, res) {
  let jhonKidneys = users[0].kidneys;
  let numberOfKidneys = jhonKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

/**
 * POST is used to post the data;
 * it is done through postman server;
 * app.use(express.json()) should be used;
 */
app.post("/", function (req, res) {
  console.log(req.body);
  let isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

/**
 * PUT method is modify data to a certain level...
 * PATCH is used to modify a patch of data like put not whole content;
 */
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

/**
 * DELETE method is used to delete data
 * add a method if zero kidneys dont delete
 */

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
  console.log(`app listening  ${port}`);
});
