export default class Employee {
    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    setSalary(salary:number): void{
        this.salary = salary;
    }

    getSalary():number{
        return this.salary;
    }
}