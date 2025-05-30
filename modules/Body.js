import Point from "./Physics/Point.js";

export default class Body {
  constructor() {
    this.position=new Point(0,0);
  }
  setPosition(x=0, y=0)
  {
    this.position=new Point(x,y); 
  }
  getPosition()
  {
    return this.position;
  }
}
