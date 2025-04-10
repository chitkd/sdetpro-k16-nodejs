"use strict";
// const Employee = require('./Employee');
// const SalaryController = require('./SalaryController');
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var SalaryController_1 = require("./SalaryController");
// Create data | OOP
var teo = new Employee_1.Employee("Teo", 10000);
var ti = new Employee_1.Employee("Ti", 11000);
// Init controller, process user-defined data | FP
var salaryController = new SalaryController_1.SalaryController();
// Get the evaluated result
var totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(totalSalary);
// Mismatching between desired parameters & arguments
