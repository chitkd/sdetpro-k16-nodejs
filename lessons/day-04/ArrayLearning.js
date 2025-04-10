// CRUD
// CREATE
let myArray = [1, 2, 3, 4, 5];
// first element's index: 0
// last element's index: array's length - 1

// Get the array's length
console.log(`Arrray's length: ${myArray.length}`);

// READ
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

for (let index = myArray.length - 1; index >= 0; index--) {
    myArray[index] = myArray[index] * 2;
}
console.log(myArray[-1]);

// Undefined holes: <n empty items>
myArray[5] = 7;
myArray[myArray.length] = 6
myArray.push(6);
myArray.push([9, 10]);
// myArray[15] = 1000;
console.log(myArray);
let removedValue = myArray.pop();
console.log(`removedValue: ${removedValue}`);
console.log(`After array: ${myArray}`);



// UPDATE
// DELETE