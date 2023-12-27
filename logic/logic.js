let users = [
    {
      name1: "jhon",
      kidneys: [
        {
          healthy: false,
        },
      ],
    }
  ];

//totalKidneys;
//healthyKidneys;
//unhealthyKidneys;

 let jhonKidneys = users[0].kidneys;
 let numberOfKidneys = jhonKidneys.length;
 let numberOfHealthyKidneys = 0;

for(let i=0; i<jhonKidneys.length; i++){
    if(jhonKidneys[i].healthy){
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
}

let numberOfUnhealthyKidneys = numberOfHealthyKidneys - numberOfKidneys;

console.log(numberOfUnhealthyKidneys)