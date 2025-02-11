let myString = ` Day la chu trong \`nhay don\` `;
console.log(myString);

// Lenghth
console.log(myString.length);

// chartAt
console.log(myString.charAt(0));

// Print each character
for (let index = 0; index < myString.length; index++) {
    //console.log(myString[index]);
}


// Eliminate spaces
let trimStr = myString.trim();
console.log(trimStr);
console.log(myString);

// hint: em phai hi sinh -> remove m
let targetStr = "tMomi mnay gmap mnmhamu 7MH";

// REGEX
let decodeStr = targetStr.replace(/m/gi, "");
console.log(decodeStr);

let uiStr = "200mins";
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "");
//let uiStrWithNum1 = = uiStr.replace(/\D/g, "");
console.log(Number(uiStrWithNum) + 1);

// +, concat() - concatenating
let firstString = "Hello";
let secondString = ", tui ten teo";
let combinedStr = firstString.concat(secondString).concat("!") + "!";
console.log(combinedStr);


