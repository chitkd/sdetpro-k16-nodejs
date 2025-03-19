import Employee from "./Employee";
export default class FTE extends Employee {
    
    constructor() {
        super(10 * 1000);
    }

    setBonus(): void {
        // TODO: provide details imementation
        this.bonus = 0;
    }
}