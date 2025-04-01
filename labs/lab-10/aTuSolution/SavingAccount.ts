import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {
    constructor() {
        super();
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): number {
        const errMsg = "Saving account must have minium balance as 0";
        return this.withDraw(amount, errMsg);
    }

}