const givenStr = "Hello ban, tui ten teo, ban cung ten teo ho?";
let individualWords = givenStr.replace(/,/gi, "").split(" ");
const groupWords = groupWord(individualWords);
console.log(groupWords);


/**
 * 
 * Hello: 1
 * ban: 2
 * 
 */
function groupWord(individualWords) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word)){
            wordMap.set(word, 1);
        } else{
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}