/**
 * take a case to demonstrate, a hospital case;
 * where you take adhar card & some medical test;
 * according to tests the user should pass all criteria to consult with the doctor;
 * criteria written below;
 */

const express = require("express");

const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
  let username = req.headers.username;
  let password = req.headers.password;
  let kidneyId = req.query.kidneyId;

  if (username != "Samrat" || password != "Samrat@123") {
    res.status(400).json({ msg: "something is wrong with your input" });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "something is wrong with your input" });
    return;
  }
  res.json({
    msg: "your kidney id fine!",
  });
});

app.listen(port, function () {
  console.log(`your port is running in ${port}`);
});
