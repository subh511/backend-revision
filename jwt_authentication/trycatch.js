function getLength(name){
    return name.length;
}

//it throw an error because of the wrong statement written in 
//try & catch block;
try{
    const ans = getLength();
    console.log(ans)
}catch(e){
    console.log("inside the catch block")
}
console.log("hi there")