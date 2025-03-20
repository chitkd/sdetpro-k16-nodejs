"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    // Write a method to accept a list of Employee and calculate total salary
    EmployeeController.getTotalSalary = function (employeeList) {
        if (employeeList.length > 0) {
            var totalSalary = 0;
            for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
                var emp = employeeList_1[_i];
                totalSalary += (emp.getSalary() + emp.getBonus());
            }
            return totalSalary;
        }
        else {
            throw new Error("No employee in the list so cannot calculate total salary");
        }
    };
    // Please print out the employee with highest salary
    EmployeeController.getHighestSalary = function (employeeList) {
        var highestSalaryEmp = employeeList[0];
        if (employeeList.length > 0) {
            for (var _i = 0, employeeList_2 = employeeList; _i < employeeList_2.length; _i++) {
                var emp = employeeList_2[_i];
                if (emp.getSalary() + emp.getBonus() > highestSalaryEmp.getSalary() + highestSalaryEmp.getBonus()) {
                    highestSalaryEmp = emp;
                }
            }
            return highestSalaryEmp;
        }
        else {
            throw new Error("No employee in the list so cannot find the employee with highest");
        }
    };
    // Please print out the employee with lowest salary
    EmployeeController.getLowestSalary = function (employeeList) {
        if (employeeList.length > 0) {
            var lowestSalaryEmp = employeeList[0];
            for (var _i = 0, employeeList_3 = employeeList; _i < employeeList_3.length; _i++) {
                var emp = employeeList_3[_i];
                if (emp.getSalary() + emp.getBonus() < lowestSalaryEmp.getSalary() + lowestSalaryEmp.getBonus()) {
                    lowestSalaryEmp = emp;
                }
            }
            return lowestSalaryEmp;
        }
        else {
            throw new Error("No employee in the list so cannot find the employee with highest");
        }
    };
    // Sort employees base on salary (ascending), name (ascending A-Z)
    EmployeeController.sortEmployeeBySalaryName = function (employeeList) {
        if (employeeList.length > 0) {
            var sortedEmployeeList = employeeList;
            for (var index1 = 0; index1 < sortedEmployeeList.length - 1; index1++) {
                for (var index2 = index1 + 1; index2 < employeeList.length; index2++) {
                    var income1 = sortedEmployeeList[index1].getSalary() + sortedEmployeeList[index1].getBonus();
                    var income2 = sortedEmployeeList[index2].getSalary() + sortedEmployeeList[index2].getBonus();
                    if (income2 < income1 || (income1 == income2 && sortedEmployeeList[index2].getName() < sortedEmployeeList[index1].getName())) {
                        this.swapEmployee(sortedEmployeeList, index1, index2);
                    }
                }
            }
            return sortedEmployeeList;
        }
        else {
            throw new Error("No employee in the list so cannot sort");
        }
    };
    EmployeeController.swapEmployee = function (employeeList, index1, index2) {
        var temp = employeeList[index1];
        employeeList[index1] = employeeList[index2];
        employeeList[index2] = temp;
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
