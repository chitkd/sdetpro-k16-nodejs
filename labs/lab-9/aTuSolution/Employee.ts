export default abstract class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string) {
        this.name = name;
    }

    getSalary(): number {
        return this.salary;
    }

    getName(): string {
        return this.name;
    }

}