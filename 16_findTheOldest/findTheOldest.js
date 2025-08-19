const currentYear = new Date().getFullYear();

const findTheOldest = function(array) {
   let peopleAged = array.map(person => {
    switch (typeof person.yearOfDeath){
        case "undefined":
               return ({ name: person.name,
               age: `${currentYear - person.yearOfBirth}`});
        case "number":
               return ({ name: person.name,
               age: `${person.yearOfDeath - person.yearOfBirth}`});
    }
   }
    ).sort((a, b) => a.age -b.age);

    return peopleAged[peopleAged.length - 1];
   
};

// Do not edit below this line
module.exports = findTheOldest;
