export default class Person {
    protected name: string;
    protected age: number;

    // Service method
    setAge(age: number) {
        this.validateAge(age);
        this.age = age;
    }

    // Support method
    private validateAge(age: number) {
        if (age < 0){
            throw new Error("Age must be greater than 0");
        }
    }
}