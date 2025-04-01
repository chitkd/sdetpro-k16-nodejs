import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {
    constructor() {
        super();
        this.minimumBalance = 50;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): number {
        const errMsg = "Checking account must have minium balance as 50";
        return this.withDraw(amount, errMsg);
    }

}