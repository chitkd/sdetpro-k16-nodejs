import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

const ti = new Contractor("Ti");
let tram = new FTE("Tram");
let teo1 = new FTE("Teo1");
let teo2 = new Contractor("Teo2");
let lan = new Contractor("Lan");
let la = new Contractor("La");

ti.setBonus();
teo1.setBonus();
teo2.setBonus();
lan.setBonus();
tram.setBonus();
la.setBonus();

const employeeList = [ti, teo1, tram, lan, la, teo2];

const totalSalary = EmployeeController.getTotalSalary(employeeList);
console.log(`Total salary is: ${totalSalary}`);

console.log("\n=========================SOLUTION 1=========================");
const highestSalaryEmp = EmployeeController.getHighestSalary(employeeList);
const lowestSalaryEmp = EmployeeController.getLowestSalary(employeeList);
console.log(`The employee with highest salary is: ${highestSalaryEmp.getName()}`);
console.log(`The employee with lowest salary is: ${lowestSalaryEmp.getName()}`);

console.log("\n=========================SOLUTION 2=========================");
// The result is different from solution 1 because the list is sorted by name
const sortedEmployeeList = EmployeeController.sortEmployeeBySalaryName(employeeList);
console.log("Sorted employee list:");
for (const emp of sortedEmployeeList) {
    console.log(`\t`, emp.toString());
}

if (sortedEmployeeList.length > 0) {
    const highestSalaryEmpSolution2 = sortedEmployeeList[0];
    const lowestSalaryEmpSolution2 = sortedEmployeeList[sortedEmployeeList.length - 1];
    console.log(`The employee with highest salary is: ${highestSalaryEmpSolution2.getName()}`);
    console.log(`The employee with lowest salary is: ${lowestSalaryEmpSolution2.getName()}`);
}

