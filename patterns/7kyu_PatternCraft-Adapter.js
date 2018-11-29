//The Adapter Design Pattern 
/* The adapter receives an instance of the object that it is going to adapt and handles it in a way that works with our application.
   In this example we have the pre-loaded classes:
	class Marine {
	  attack(target) {
	    target.health -= 6;
	  }
	}

	class Zealot {
	  attack(target) {
	    target.health -= 8;
	  }
	}

	class Zergling {
	  attack(target) {
	    target.health -= 5;
	  }
	}

	class Mario {
	  jumpAttack() {
	    console.log('Mamamia!');
	    return 3;
	  }
	}

    The task is to implement MarioAdapter  that can attack as other units do. */

	  
class MarioAdapter {
  constructor(mario) {
      this.mario=mario;
  }

  attack(target) {
     target.health-=this.mario.jumpAttack();
  }
}
