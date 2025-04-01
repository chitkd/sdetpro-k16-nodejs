"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contractor_1 = require("./Contractor");
var EmployeeController_1 = require("./EmployeeController");
var FTE_1 = require("./FTE");
var SortRuleType_1 = require("./SortRuleType");
var fteNumber = 3;
var contractorNumber = 2;
var fteEmployees = [];
var contractorEmployees = [];
for (var empIndex = 0; empIndex < fteNumber; empIndex++) {
    fteEmployees.push(new FTE_1.default("FTE_".concat(empIndex + 1)));
}
for (var empIndex = 0; empIndex < contractorNumber; empIndex++) {
    contractorEmployees.push(new Contractor_1.default("Contractor_".concat(empIndex)));
}
var controller = new EmployeeController_1.default();
var empList = fteEmployees.concat(contractorEmployees);
var totalSalry = controller.getTotalSalary(fteEmployees.concat(contractorEmployees));
console.log("Total salary: ".concat(totalSalry));
var sortedByNameASC = controller.sortByName(empList, SortRuleType_1.ASC);
var sortedByNameDESC = controller.sortByName(empList, SortRuleType_1.DESC);
console.log("sortedByNameASC: ".concat(JSON.stringify(sortedByNameASC)));
console.log("sortedByNameDESC: ".concat(JSON.stringify(sortedByNameDESC)));
