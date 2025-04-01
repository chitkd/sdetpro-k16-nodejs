import Employee from "./Employee";

export default class EmployeeController {

    // Write a method to accept a list of Employee and calculate total salary
    static getTotalSalary(employeeList: Employee[]): number {
        if (employeeList.length > 0) {
            let totalSalary: number = 0;
            for (const emp of employeeList) {
                totalSalary += (emp.getSalary() + emp.getBonus());
            }
            return totalSalary;
        } else {
            throw new Error("No employee in the list so cannot calculate total salary");
        }

    }

    // Please print out the employee with highest salary
    static getHighestSalary(employeeList: Employee[]): Employee {
        let highestSalaryEmp: Employee = employeeList[0];
        if (employeeList.length > 0) {
            for (const emp of employeeList) {
                if (emp.getSalary() + emp.getBonus() > highestSalaryEmp.getSalary() + highestSalaryEmp.getBonus()) {
                    highestSalaryEmp = emp;
                }
            }
            return highestSalaryEmp;
        } else {
            throw new Error("No employee in the list so cannot find the employee with highest");
        }
    }

    // Please print out the employee with lowest salary
    static getLowestSalary(employeeList: Employee[]): Employee {
        if (employeeList.length > 0) {
            let lowestSalaryEmp: Employee = employeeList[0];
            for (const emp of employeeList) {
                if (emp.getSalary() + emp.getBonus() < lowestSalaryEmp.getSalary() + lowestSalaryEmp.getBonus()) {
                    lowestSalaryEmp = emp;
                }
            }
            return lowestSalaryEmp;
        } else {
            throw new Error("No employee in the list so cannot find the employee with highest");
        }
    }

    // Solution 1: Sort employees base on salary (ascending), name (ascending A-Z)
    // Solution 2: User sort function to sort employee list
    static sortEmployeeBySalaryName(employeeList: Employee[]): Employee[] {
        if (employeeList.length > 0) {
            let sortedEmployeeList: Employee[] = employeeList;
            for (let index1 = 0; index1 < sortedEmployeeList.length - 1; index1++) {
                for (let index2 = index1 + 1; index2 < employeeList.length; index2++) {
                    let income1 = sortedEmployeeList[index1].getSalary() + sortedEmployeeList[index1].getBonus();
                    let income2 = sortedEmployeeList[index2].getSalary() + sortedEmployeeList[index2].getBonus();
                    if (income2 < income1 || (income1 == income2 && sortedEmployeeList[index2].getName() < sortedEmployeeList[index1].getName())) {
                        this.swapEmployee(sortedEmployeeList, index1, index2);
                    } 
                }
            }
            return sortedEmployeeList;
        } else {
            throw new Error("No employee in the list so cannot sort");
        }
    }

    private static swapEmployee(employeeList: Employee[], index1: number, index2: number) {
        let temp = employeeList[index1];
        employeeList[index1] = employeeList[index2];
        employeeList[index2] = temp;
    } 
}


