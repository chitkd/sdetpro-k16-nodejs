"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Human_1 = require("./Human");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.move = function (movable) {
        movable.move();
    };
    Controller.talk = function (talkable) {
        talkable.talk();
    };
    return Controller;
}());
exports.default = Controller;
Controller.move(new Human_1.default());
Controller.move(new Animal_1.default());
Controller.talk(new Human_1.default());
Controller.talk(new Animal_1.default());
