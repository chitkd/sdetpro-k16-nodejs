import Animal from "../Animal";

export default class AnimalRacingController {
    static getWinner(animalList: Animal[]): Animal {
        let winner: Animal = animalList[0];
        for (const animal of animalList) {
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner;
    }
}