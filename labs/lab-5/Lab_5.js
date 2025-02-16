/**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 */

/**
 * Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 * The program need to allow user to input a sentence, not hard code (optional)
*/
const readline = require('readline-sync');
const givenStr = inputString();
let individualWords = givenStr.replace(/,/gi, "").split(" ");
const groupWords = groupWord(individualWords);
console.log(groupWords);

function groupWord(individualWords) {
    let wordArray = {};
    for (const word of individualWords) {
        if (word === "") {
            continue;
        } else {
            if (wordArray[word]) {
                wordArray[word]++;
            } else {
                wordArray[word] = 1;
            }
        }
    }
    return wordArray;
}

function inputString() {
    return readline.question('Please enter a sentence: ');
}

