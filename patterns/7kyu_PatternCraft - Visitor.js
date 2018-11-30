//The Visitor Design Pattern
/*
	There are 3 classes:
	    Marine: has a health property and accept(visitor) method
	    Marauder: has a health property and accept(visitor) method
	    TankBullet: the visitor class. Has visitLight(unit) and visitArmored(unit) methods
	The task is to complete the code so that when a Tank attacks a Marine it takes 21 damage and when a Tank attacks a Marauder it takes 32 damage.
	The Marine's initial health should be set to 100 and the Marauder's health should be set to 125.
*/

class Marine {
  constructor() {
    this.health=100;
  }
  accept(visitor) {  
    visitor.visitLight(this);
  }
}

class Marauder {
  constructor() {
     this.health=125;
  }
  accept(visitor) {  
    visitor.visitArmored(this);
  }
}

class TankBullet {
  visitLight(unit) {
     unit.health-=21;
  }
  visitArmored(unit) {
    unit.health-=32;
  }
}