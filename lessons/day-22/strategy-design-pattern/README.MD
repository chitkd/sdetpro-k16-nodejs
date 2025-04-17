GameController: Duck (any)

// Aggregation
Duck:
     protected flyBehavior: FlyBehavior; (from interface)
     protected quackBehavior: QuackBehavior; (from interface)
Decoy
BabyDuck
MallarDuck

Controller
     performQuack(duck: Duck)
     performFly(duck: Duck)

     FlyBehaviour
     QuadBehaviour