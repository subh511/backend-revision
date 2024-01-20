const jwt = require("jsonwebtoken");


const userDetails = {
    name: "subhranshu",
    account: 7809417213
}

const token = jwt.sign(userDetails,"secret");

console.log(token);

//jwt sign is required