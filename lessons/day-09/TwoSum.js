/**
 * Two sum
 * [3, 7, 22, 1], target number: 8
 * -> [1, 3]
 * 
 */

// Brute force
/**
 * outer loop index 0-> length - 2
    firstNum
    inner loop index + 1 -> length - 1
        if (firstNum + current == target)
            return [firstIndex, secondIndex]
return []
 */
// Time Complexity =  Big O notation On^2
const givenArray = [3, 7, 22, 1]
const targetNum = 8;
let indices_1 = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices_1);

let indices_2 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_2);


function findIndicesUsingBruteForce(givenArray, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length - 1; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < givenArray.length; secondNumIndex++) {
            const secondNum = givenArray[secondNumIndex];
            if (secondNum === targetNum - firstNum) {
                return [firstNumIndex, secondNumIndex];
            }

        }
    }
    return [];
}

// O(n)
function findIndicesUsingMap(givenArray, targetNum) {
    let numMap = new Map();
    for (let currentNumberIndex = 0; currentNumberIndex < givenArray.length; currentNumberIndex++) {
        const firstNum = givenArray[currentNumberIndex];
        const lookingNum = targetNum - firstNum;
        if (numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), currentNumberIndex];
        }
        numMap.set(firstNum, currentNumberIndex);
        /**
         * [
         * [3 (value), 0 (index)],
         * [7 (value), 1 (index)],
         * [22 (value), 2 (index)],
         * ]
         */
    }
    return [];
}

