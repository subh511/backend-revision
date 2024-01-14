const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "samrat@gmail.com",
    password: "12345",
    name: "samrat jhon",
  },
  {
    username: "subhranshu@gmail.com",
    password: "1234",
    name: "subhranshu sekher dhal",
  },
];

function userExists(username, password) {
  //write logic to return true or false if this user exists
  //in ALL_Users array;
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    //return the list of users than this username
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token ",
    });
  }
});

app.listen(3000);
