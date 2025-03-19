export default class Animal {
    protected name: string;
    protected speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = this.randomSpeed(maxSpeed)
    }

    public getName(): string {
        return this.name;
    }

    public getSpeed(): number {
        return this.speed;
    }

    private randomSpeed(maxValue: number): number {
        return Math.floor(Math.random() * maxValue) + 1;
        // Làm tròn xuống
        // ceil: làm tròn lên
    }
}