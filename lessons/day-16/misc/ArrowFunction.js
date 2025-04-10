// Type: Function Declaration
function add(a, b) {
    return a + b;
}

// Type: Function Expression
const add_ = function (a, b) {
    return a + b;
}

const add__ = (a, b) =>{
    return a + b;
}

const add___ = (a, b) => a + b;
const add____ = (a, b) => console.log(a + b);


// Type: Arrow Function
const arrowAddNumbers = a => console.log(a);

// Lexical this binding
// Object literal
const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        setTimeout( () => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, 2 *1000);
    }
}

person.sayHello();

const array = [1, 2, 3, 4, 9];
const oddNums = array.filter(num => num % 2 !== 0);

const filterEvenNums = array.filter(num => num % 2 == 0);
console.log(filterEvenNums);


//console.log(oddNums);
add____(1, -8);