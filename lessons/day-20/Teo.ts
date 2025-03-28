import Person from "./Person";

export default class Teo extends Person {
    setAge(age: number): void {
        if (age < 0) {
            throw new Error("Teo's age should be greater than 0");
        }
        this.age = age;
    }
}