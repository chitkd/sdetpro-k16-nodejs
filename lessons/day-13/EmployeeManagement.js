const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

// Create data | OOP
let teo = new Employee("Teo", 10000);
let ti = new Employee("Ti", 11000);

// Init controller, process user-defined data | FP
let salaryController = new SalaryController();

// Get the evaluated result
console.log([teo, ti]);

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary);
