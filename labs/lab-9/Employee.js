"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getBonus = function () {
        return this.bonus;
    };
    Employee.prototype.toString = function () {
        return "Name: ".concat(this.name, ", Salary: ").concat(this.salary, ", Bonus: ").concat(this.bonus);
    };
    return Employee;
}());
exports.default = Employee;
