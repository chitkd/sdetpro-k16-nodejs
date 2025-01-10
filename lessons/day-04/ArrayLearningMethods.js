const {
    ti,
    teo
} = require('./UtilMethods.js');
let myArray = [1, 2, 3, 4, 5];

// Filter to get even numbers form array
// Higher Order Function: HOF
// let evenNumbers = myArray.filter(function (value, index, originArray){

// });

let evenNumbers = myArray.filter(teo);
myArray[1] = 777
console.log(evenNumbers);
console.log(myArray);
