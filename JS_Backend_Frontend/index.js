//https://api.thecatapi.com/v1/images/search

// function getAnimalData(){
//   fetch(`https://fakerapi.it/api/v1/persons`)
//    .then(function(response){
//     response.json()
//     .then(function(data){
//         console.log(data)
//     })
//    })
//}

// high level concepts of fetching data from backend server
// with await & async method data is fetched from the server;

async function getAnimalData(){
    const response = await fetch(`https://fakerapi.it/api/v1/persons`)
    const personData = await response.json()
    console.log(personData)
}