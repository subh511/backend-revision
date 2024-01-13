const express = require("express");
const app = express();

const port = 3000;

const zod = require("zod");

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}


//basically how to post through Zod Schema;
app.post("/login", function (req,res) {
  const response = validateInput(req.body);
  if (!response.success) {
    response.json({
      msg: "there is some error",
    });
    return;
  }
});

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});
