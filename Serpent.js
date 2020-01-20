class Serpent {
    constructor() {
        this.size = 3;
        this.direction = "est";
        this.positions = new Array();
        this.positions.push(new Case(7,1,false,true));
        this.positions.push(new Case(7,2,false,true));
        this.positions.push(new Case(7,3,false,true));
    }
  }
