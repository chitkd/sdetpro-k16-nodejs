import Animal from "./Animal";
import Human from "./Human";
import Movable from "./Movable";
import Talkable from "./Talkable";

export default class Controller {

    static move(movable: Movable): void {
        movable.move();
    }

    static talk(talkable: Talkable): void {
        talkable.talk();
    }
}

Controller.move(new Human());
Controller.move(new Animal());

Controller.talk(new Human());
Controller.talk(new Animal());