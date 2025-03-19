import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

const ti = new Contractor("Ti");
let tram = new FTE("Tram");
let teo1 = new FTE("Teo");
let teo2 = new Contractor("Teo");
let lan = new Contractor("Lan");
let la = new Contractor("La");

ti.setBonus();
teo1.setBonus();
teo2.setBonus();
lan.setBonus();
tram.setBonus();
la.setBonus();

const employeeList = [ti, teo1, tram, lan, la, teo2];
const sortedEmployeeList = EmployeeController.sortEmployeeBySalaryName(employeeList);
console.log("Sorted employee list:");
for (const emp of sortedEmployeeList) {
    console.log(`\t`, emp.toString());
}

console.log("==========================================================");
const totalSalary = EmployeeController.getTotalSalary(employeeList);
const highestSalaryEmp = EmployeeController.getHighestSalary(employeeList);
const lowestSalaryEmp = EmployeeController.getLowestSalary(employeeList);

console.log(`Total salary is: ${totalSalary}`);
console.log(`The employee with highest salary is: ${highestSalaryEmp.getName()}`);
console.log(`The employee with lowest salary is: ${lowestSalaryEmp.getName()}`);

