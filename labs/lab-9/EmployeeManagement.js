"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contractor_1 = require("./Contractor");
var EmployeeController_1 = require("./EmployeeController");
var FTE_1 = require("./FTE");
var ti = new Contractor_1.default("Ti");
var tram = new FTE_1.default("Tram");
var teo1 = new FTE_1.default("Teo1");
var teo2 = new Contractor_1.default("Teo2");
var lan = new Contractor_1.default("Lan");
var la = new Contractor_1.default("La");
ti.setBonus();
teo1.setBonus();
teo2.setBonus();
lan.setBonus();
tram.setBonus();
la.setBonus();
var employeeList = [ti, teo1, tram, lan, la, teo2];
var totalSalary = EmployeeController_1.default.getTotalSalary(employeeList);
console.log("Total salary is: ".concat(totalSalary));
console.log("\n=========================SOLUTION 1=========================");
var highestSalaryEmp = EmployeeController_1.default.getHighestSalary(employeeList);
var lowestSalaryEmp = EmployeeController_1.default.getLowestSalary(employeeList);
console.log("The employee with highest salary is: ".concat(highestSalaryEmp.getName()));
console.log("The employee with lowest salary is: ".concat(lowestSalaryEmp.getName()));
console.log("\n=========================SOLUTION 2=========================");
// The result is different from solution 1 because the list is sorted by name
var sortedEmployeeList = EmployeeController_1.default.sortEmployeeBySalaryName(employeeList);
console.log("Sorted employee list:");
for (var _i = 0, sortedEmployeeList_1 = sortedEmployeeList; _i < sortedEmployeeList_1.length; _i++) {
    var emp = sortedEmployeeList_1[_i];
    console.log("\t", emp.toString());
}
if (sortedEmployeeList.length > 0) {
    var highestSalaryEmpSolution2 = sortedEmployeeList[0];
    var lowestSalaryEmpSolution2 = sortedEmployeeList[sortedEmployeeList.length - 1];
    console.log("The employee with highest salary is: ".concat(highestSalaryEmpSolution2.getName()));
    console.log("The employee with lowest salary is: ".concat(lowestSalaryEmpSolution2.getName()));
}
