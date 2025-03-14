"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, maxSpeed) {
        this.name = name;
        this.speed = this.randomNumber(maxSpeed);
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getSpeed = function () {
        return this.speed;
    };
    Animal.prototype.randomNumber = function (maxValue) {
        return Math.floor(Math.random() * maxValue) + 1;
    };
    Animal.prototype.toString = function () {
        return "".concat(this.name, " - ").concat(this.speed);
    };
    return Animal;
}());
exports.default = Animal;
