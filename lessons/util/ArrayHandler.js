const {
    isOddNumber,
    isEvenNumber,
} = require(`/Volumes/Work-Study/SOURCE_CODE/sdetpro-k16-nodejs/lessons/util/NumberHandler.js`);


function createArray() {
    let array = [];
    let numberOfElement = inputANumber("Please input the number of Elements: ");

    while (numberOfElement <= 0) {
        numberOfElement = inputANumber("Please input the number of Elements again: ");
    }

    for (let index = 0; index < numberOfElement; index++) {
        array[index] = inputANumber("Please input a number: ");
    }
    return array;
}

const inputANumber = function (strings) {
    const readline = require("readline-sync");
    return readline.question(`${strings}`);
}

function countOddNumber(array) {
    let oddCount = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (isOddNumber(element) && element >= 0) {
            oddCount++;
        }
    }
    return oddCount;
}

function countEvenNumber(array) {
    let evenCount = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (isEvenNumber(element) && element >= 0) {
            evenCount++;
        }
    }
    return evenCount;
}

function findMin(array) {
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let isMin = element < min;
        if (element < min) {
            min = element;
        }
    }
    return min;
}

function findMax(array) {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

function sortMinToMax(array) {
    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = index1 + 1; index2 < array.length; index2++) {
            if (array[index2] < array[index1]) {
                let temp = array[index1];
                array[index1] = array[index2];
                array[index2] = temp;
            }
        }
    }
    return array;
}

function merge2SortedIntegerArray(array1, array2) {
    let resultArray = [];
    for (let index1 = 0; index1 < array1.length;) {
        for (let index2 = 0; index2 < array2.length;) {
            if (array2[index2] < array1[index1]) {
                resultArray.push(array2[index2]);
                array2.splice(index2, 1);
            } else{
                break;
            }
        }
        resultArray.push(array1[index1]);
        array1.splice(index1, 1);
    }

    if (array1.length > 0){
        array1.forEach(element => {
            resultArray.push(element);
        });
    }

    if (array2.length > 0){
        array2.forEach(element => {
            resultArray.push(element);
        });
    }
    return resultArray;
}

function isSortedMinToMax(array){
    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = index1; index2 < array.length; index2++) {
            if (array[index1] > array[index2]){
                return false;
            }
        }
    }
    return true;
}
module.exports = {
    createArray,
    countOddNumber,
    countEvenNumber,
    findMin,
    findMax,
    sortMinToMax,
    isSortedMinToMax,
    merge2SortedIntegerArray
}