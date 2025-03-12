
import { Employee } from "./Employee"; './Employee';
// User-defined data
export class SalaryController {
    getTotalSalary(employeeList: Employee[]): number {
        let totalSalary:number = 0;
        for (const employee of employeeList) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}