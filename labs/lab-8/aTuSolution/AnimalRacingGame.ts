import AnimalRacingController from "./AnimalRacingController";
import Tiger from "../Tiger";
import Horse from "../Horse";

let tiger = new Tiger("Tiger");
let horse = new Horse("Horse");

const winner = AnimalRacingController.getWinner([tiger, horse]);
console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`);
