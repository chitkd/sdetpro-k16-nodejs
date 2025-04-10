"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalController = /** @class */ (function () {
    function AnimalController() {
    }
    AnimalController.getWinner = function (animals) {
        if (animals.length === 0) {
            throw new Error("No animals");
        }
        else {
            var winner = animals[0];
            for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
                var animal = animals_1[_i];
                if (animal.getSpeed() > winner.getSpeed()) {
                    winner = animal;
                }
            }
            return winner;
        }
    };
    return AnimalController;
}());
exports.default = AnimalController;
