import Animal from "./Animal";
export default class AnimalController {
    static getWinner(animals: Animal[]): Animal {
        if (animals.length === 0) {
            throw new Error("No animals");
        } else {
            let winner = animals[0];
            for (const animal of animals) {
                if (animal.getSpeed() > winner.getSpeed()) {
                    winner = animal;
                }
            }
            return winner;
        }
    }
}