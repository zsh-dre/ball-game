export default class Point {
  constructor(x=0, y=0)
  {
    this.x=x;
    this.y=y;
  }
  
  static displayName = "Point";
  static distance(a, b)
  {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
