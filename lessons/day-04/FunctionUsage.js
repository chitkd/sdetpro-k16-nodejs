//const UtilMethods = require('./UtilMethods.js');

// Destructure
const {
    ti,
    teo
} = require('./UtilMethods.js');

// Get an user input then check if it;s even or odd num
let userInput = getUserInput();
let isOddNumber_ = ti(userInput);

if (isOddNumber_){
    console.log(`The number ${userInput} is an odd number`);
} else{
    console.log(`The number ${userInput} is an even number`);
}

function getUserInput(){
    return 3;
}