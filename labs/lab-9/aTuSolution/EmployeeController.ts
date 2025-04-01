import Employee from "./Employee";
import { ASC, DESC } from "./SortRuleType";

export default class EmployeeController {

    getTotalSalary(empList: Employee[]): number {
        let totalSalary: number = 0;

        for (const emp of empList) {
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    }

    sortByName(empList: Employee[], rule: string): Employee[] {
        const copied = [...empList];
        if (rule === ASC) {
            return copied.sort((emp1, emp2) => emp1.getName().localeCompare(emp2.getName()));
        } else if (rule === DESC) {
            return copied.sort((emp1, emp2) => emp2.getName().localeCompare(emp1.getName()));
        } else {
            this.printInvalidRule();
            return copied;
        }
    }

    sortBySalary(empList: Employee[], rule: string): Employee[] {
        const  copied = [...empList];
        if (rule === ASC) {
            return copied.sort((emp1, emp2) => emp1.getSalary() - emp2.getSalary());
        } else if (rule === DESC) {
            return copied.sort((emp1, emp2) => emp2.getSalary() - emp1.getSalary());
        } else {
            this.printInvalidRule();
            return copied;
            
        }
    }

    private printInvalidRule(){
        console.error("Invalid sort rule");
    }
}