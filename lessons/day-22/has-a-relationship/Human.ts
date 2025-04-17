import Movable from "./Movable";
import Talkable from "./Talkable";

export default class Human implements Movable, Talkable {
    move(): void {
        console.log("Human moving...");
    }

    talk(): void {
        console.log("Human talking...");
    }
    
}