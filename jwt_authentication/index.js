const jwt = require("jsonwebtoken");

//decode verify generator;

const value = {
  name: "samrat",
  accountNumber: 123456789,
};

//sign and generate token;

const token = jwt.sign(value, "secret");
console.log(token);

//if intruder copy your code and you need to verify that jwt-token;

/**
 * using verify jwt token, if it gives true then it good otherwise you copying code
 * const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtcmF0IiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5LCJpYXQiOjE3MDUzMTcwOTJ9.jSpF37W36DV9DbazxJI70d8XyOTwa43WgHVAb5ybkcw","secret")
 */

// you will a bunch of string together;
// this token has been genearted using this secret,and hence this
//token can only be verified using this secret;
// this string -- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtcmF0IiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5LCJpYXQiOjE3MDUzMTcwOTJ9.jSpF37W36DV9DbazxJI70d8XyOTwa43WgHVAb5ybkcw


