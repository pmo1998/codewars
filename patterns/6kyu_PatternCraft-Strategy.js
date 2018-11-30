//The Strategy Design Pattern
/*
  There're 3 classes:
    Viking: has a position, moveBehavior and move method.
    Fly and Walk: the move behaviors with the move(unit) method. Fly has to move 10 positions at a time and Walk has to move 1.
  
  The task is to complete the code so that when a Viking is flying its position increases by 10 each time it moves. 
  If it is walking then the position is increased by 1.
*/
class Fly {
  move(unit) {
    unit.position+=10;
  }
}

class Walk {
  move(unit) {
    unit.position++;
  }
}

class Viking {
  constructor() {
     this.position=0;
     this.moveBehavior=new Walk();
  }
  
  move() {
      this.moveBehavior.move(this);
  }
}