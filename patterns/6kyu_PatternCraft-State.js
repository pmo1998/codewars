// The State Design Pattern
/*There're  3 classes:

    Tank: has a state, canMove and damage properties
    SiegeState and TankState: has canMove and damage properties
    The tank initial state should be TankState

    Tank goes into SiegeMode it cannot move and its damage goes to 20.
    When it goes to TankMode it should be able to move and the damage should be set to 5.

*/


class SiegeState {
  constructor() {
      this.canMove=false;
      this.damage=20;
}}

class TankState {
  constructor() {
      this.canMove=true;
      this.damage=5;
  }
}

class Tank {
  constructor() {
     this.state=new TankState();
  }
  get canMove() { return this.state.canMove; }
  get damage() { return this.state.damage;}
}
