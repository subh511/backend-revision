const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  //do something with kidneys here;
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;
  res.send("your kidney length " + kidneysLength);
});

//global catches

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with the server"
    })
})

app.listen(port, function () {
  console.log(`app listening on ${port}`);
});
