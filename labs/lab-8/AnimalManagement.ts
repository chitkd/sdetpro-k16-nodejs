import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";
import AnimalController from "./AnimalController";


const horse = new Horse("Horse");
const tiger = new Tiger("Tiger");
const dog = new Dog("Dog");

const winner = AnimalController.getWinner([horse, tiger, dog]);
console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`);
