"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Robot_1 = require("./Robot");
var DogRobot = /** @class */ (function (_super) {
    __extends(DogRobot, _super);
    function DogRobot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogRobot.prototype.getId = function () {
        return DogRobot.id;
    };
    DogRobot.id = 100;
    return DogRobot;
}(Robot_1.default));
var dogRobot = new DogRobot();
console.log(dogRobot.getId());
