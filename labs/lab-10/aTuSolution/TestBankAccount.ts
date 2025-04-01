import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAcc = new SavingAccount();
let checkingAcc = new CheckingAccount();

savingAcc.deposit(1000);
let balance = savingAcc.withdraw(1000);
console.log("Saving account balance: " + balance);

checkingAcc.deposit(1000);
balance = checkingAcc.withdraw(1000);
console.log("Checking account balance: " + balance);
