// Support function
// Service function - Utility Functions

// 3: argument

// number: parameter
function isEvenNumber(number){
    // Details implementation | implementation
    return number % 2 === 0;
}

function isEvenNumber_ (number){
    // Details implementation | implementation
    return number % 2 === 0;
}

// number: parameter before call, should declare
const  isOddNumber = function(number){
    //return number % 2 !== 0;
    return number++;
}

const  isOddNumber_ = number => number % 2 == 0;
// Common JS Module
module.exports = { 
    ti: isEvenNumber, 
    teo: isOddNumber }
