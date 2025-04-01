"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount = /** @class */ (function () {
    function BankingAccount() {
        this.balance = 0;
        this.minimumBalance = 0;
    }
    BankingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankingAccount.prototype.withDraw = function (amount, errMsg) {
        var draftBalance = this.getBalance() - amount;
        if (draftBalance < this.minimumBalance) {
            throw new Error(errMsg);
        }
        this.balance = draftBalance;
        return this.balance;
    };
    return BankingAccount;
}());
exports.default = BankingAccount;
