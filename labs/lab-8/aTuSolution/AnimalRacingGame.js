"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController_1 = require("../AnimalController");
var Tiger_1 = require("../Tiger");
var Horse_1 = require("../Horse");
var tiger = new Tiger_1.default("Tiger");
var horse = new Horse_1.default("Horse");
var winner = AnimalController_1.default.getWinner([tiger, horse]);
console.log("Winner is ".concat(winner.getName(), ", with speed: ").concat(winner.getSpeed()));
