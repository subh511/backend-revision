const zod = require("zod");

function validateInput(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3])
//schema validation will be sucess;

validateInput(["1",2,3])
//schema validation will be unsucess due a string present;
//over in the array;