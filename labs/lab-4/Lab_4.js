let user01 = {
    accountNumber: "2025001",
    routingNumber: "User_001",
    accountName: "Nguyen Van A",
    balance: 100000
}

// Creating another Bank Account Object which clone from the previous one and update the accountNumber only
let user02 = JSON.parse(JSON.stringify(user01));
user02.accountNumber = "2025002";

// Put them into ann array call: bankAccounts
let bankAccounts = [user01, user02];

// Write a consolse interface app
printConsoleInterfaceMenu();
const readline = require('readline-sync');
let userNumber = getUserNumber();
switch (userNumber) {
    case 1:
        findAnAccount(bankAccounts);
        break;
    case 2:
        updateBalance(bankAccounts);
        break;
    case 0:
        break;
    default:
        console.log('Your task number is not on the list');
}

function printConsoleInterfaceMenu() {
    console.log("=== Banking application ===");
    console.log('1. Find an account\n2. Update balance\n0. Exit the program');
}
function getUserNumber() {
    return Number(readline.question('Please enter your option: '))
}

function findAnAccount(bankAccounts) {
    let accountNumber = readline.question('Please enter the account number you want to find: ');
    let foundBankAccount = findAccountByAccountNumber(bankAccounts, accountNumber);

    if (JSON.stringify(foundBankAccount) === '{}') {
        console.log(`The bank account with account Number = '${accountNumber}' is not found`);
    } else {
        console.log(`The bank account information is found:\n- Account Name: ${foundBankAccount.accountName}\n- Account Balance: ${foundBankAccount.balance}`);
    }
}

function findAccountByAccountNumber(bankAccounts, accountNumber) {
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber) {
            return bankAccount;
        }
    }
    return {};
}

function updateBalance(bankAccounts) {
    let accountNumber = readline.question('Please enter the account number you want to withdraw: ');
    let foundBankAccount = {};
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber) {
            foundBankAccount = bankAccount;
            let money = Number(readline.question('Please enter the money you want to withdraw: '));
            if (bankAccount.balance < money) {
                console.log(`You cannot withdraw ${money} because it is more than your current balance ${JSON.stringify(bankAccount.balance)}`);
                bankAccount.balance = 0;
            } else {
                bankAccount.balance -= money;
                console.log(`The bank account after updating: ${JSON.stringify(bankAccount)}`);
            }
        }
    }
    if (JSON.stringify(foundBankAccount) === '{}') {
        console.log(`The bank account with account Number = '${accountNumber}' is not found`);
    }
}


