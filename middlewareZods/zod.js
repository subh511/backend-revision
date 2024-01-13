const express = require("express");
const zod = require("zod");

const app = express();

const schema = zod.array(zod.array());
//this schema is array of numbers that schema is 
//going to provide;

const port = 3000;

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  //do something with kidneys here;
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  //const kidneysLength = kidneys.length;

  if(!response.success){
    res.status(411).json({
        msg:"input is invalid"
    })
  }else{
    res.send({response});
  }
});


app.listen(port, function () {
  console.log(`app listening on ${port}`);
});
