function isOddNumber(number) {
    return number % 2 !== 0;
}

// const isEvenNumber(number) {
//     return number % 2 === 0;
// }

const isOddNumber = number => number % 2 !== 0;


module.exports = {
    isOddNumber,
    isEvenNumber,
}