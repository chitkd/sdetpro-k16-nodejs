"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginTestFlow = /** @class */ (function () {
    function LoginTestFlow() {
    }
    LoginTestFlow.login = function (loginPage, username, password) {
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickLoginButton();
    };
    return LoginTestFlow;
}());
exports.default = LoginTestFlow;
