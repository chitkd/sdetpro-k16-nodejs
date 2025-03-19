export default abstract class Employee {
    protected salary: number;
    protected bonus: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    getSalary():number{
        return this.salary;
    }

    protected abstract setBonus():void;

    public getBonus():number{
        return this.bonus;
    }
}