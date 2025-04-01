import Contractor from "./Contractor";
import Employee from "./Employee";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";
import {ASC, DESC} from "./SortRuleType";

const fteNumber = 3;
const contractorNumber = 2;
let fteEmployees: Employee[] = [];
let contractorEmployees: Employee[] = [];

for (let empIndex = 0; empIndex < fteNumber; empIndex++) {
    fteEmployees.push(new FTE(`FTE_${empIndex+1}`));
}

for (let empIndex = 0; empIndex < contractorNumber; empIndex++) {
    contractorEmployees.push(new Contractor(`Contractor_${empIndex}`));
}

let controller = new EmployeeController();
let empList = fteEmployees.concat(contractorEmployees);

let totalSalry = controller.getTotalSalary(fteEmployees.concat(contractorEmployees));
console.log(`Total salary: ${totalSalry}`);

const sortedByNameASC = controller.sortByName(empList, ASC);
const sortedByNameDESC = controller.sortByName(empList, DESC);

console.log(`sortedByNameASC: ${JSON.stringify(sortedByNameASC)}`);
console.log(`sortedByNameDESC: ${JSON.stringify(sortedByNameDESC)}`);

