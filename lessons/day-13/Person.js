// Class: is a template/blueprint to build an object

class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter
    get name() { // getName is also ok
        return this._name;
    }

    // Setter
    set name(name) {
        this._name = name;
    }
}

let teo = new Person("Teo", 18); // Invoke the constructor to initialize an object from the class
// client <-> Server <-> Database
// client(Java, Python, JS) <-> {headers, body, ...}: WebdriverProtocol > Server(browser webdriver) <-> browser under test (app)
teo.name = "Teo Nguyen";
let name = teo.name;
console.log(name);

