export default class Point {
  constructor(x=0, y=0)
  {
    this.x=x;
    this.y=y;
  }
  distance(point)
  {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.hypot(dx, dy);
  }
}
