export default class Animal{
    protected name: string;
    protected speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = this.randomNumber(maxSpeed)
    }

    setName(name:string){
        this.name = name;
    }

    setSpeed(speed: number){
        this.speed = speed;
    }

    getName(): string{
        return this.name;
    }

    getSpeed(): number{
        return this.speed;
    }

    randomNumber(maxValue: number): number {
        return Math.floor(Math.random() * maxValue) + 1;
    }

    toString(): string {
        return `${this.name} - ${this.speed}`;
    }

}