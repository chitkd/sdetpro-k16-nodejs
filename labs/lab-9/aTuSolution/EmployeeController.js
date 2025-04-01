"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var SortRuleType_1 = require("./SortRuleType");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.prototype.getTotalSalary = function (empList) {
        var totalSalary = 0;
        for (var _i = 0, empList_1 = empList; _i < empList_1.length; _i++) {
            var emp = empList_1[_i];
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    };
    EmployeeController.prototype.sortByName = function (empList, rule) {
        var copied = __spreadArray([], empList, true);
        if (rule === SortRuleType_1.ASC) {
            return copied.sort(function (emp1, emp2) { return emp1.getName().localeCompare(emp2.getName()); });
        }
        else if (rule === SortRuleType_1.DESC) {
            return copied.sort(function (emp1, emp2) { return emp2.getName().localeCompare(emp1.getName()); });
        }
        else {
            this.printInvalidRule();
            return copied;
        }
    };
    EmployeeController.prototype.sortBySalary = function (empList, rule) {
        var copied = __spreadArray([], empList, true);
        if (rule === SortRuleType_1.ASC) {
            return copied.sort(function (emp1, emp2) { return emp1.getSalary() - emp2.getSalary(); });
        }
        else if (rule === SortRuleType_1.DESC) {
            return copied.sort(function (emp1, emp2) { return emp2.getSalary() - emp1.getSalary(); });
        }
        else {
            this.printInvalidRule();
            return copied;
        }
    };
    EmployeeController.prototype.printInvalidRule = function () {
        console.error("Invalid sort rule");
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
