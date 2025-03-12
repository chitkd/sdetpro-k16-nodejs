// const Employee = require('./Employee');
// const SalaryController = require('./SalaryController');

import {Employee} from './Employee';
import { SalaryController } from './SalaryController';

// Create data | OOP
let teo = new Employee("Teo", 10000);
let ti = new Employee("Ti", 11000);

// Init controller, process user-defined data | FP
let salaryController = new SalaryController();

// Get the evaluated result

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary);

// Mismatching between desired parameters & arguments
