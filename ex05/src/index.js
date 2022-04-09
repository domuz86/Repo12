//Only change code below this line

var myPetsArray = [
    {
        animalType:"Dog",
        name:"Pujdo",
    },
    {
        animalType:"Cat",
        name:"Maca"

    },
    {
        animalType:"Bird",
        name:"Twetty"

    }
];

function myPetsFunction(pet) {

 return pet.name;    
};

//Only change code above this line
console.log(myPetsFunction(myPetsArray[1]));
module.exsports = myPetsFunction;
module.exsports.myPets = myPetsArray;