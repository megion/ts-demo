export interface IPoint {
  sum(): number
}

export interface ICoord {
  x: number
  y: number
}

export class Point implements IPoint, ICoord {
  //public x: number
  //public y: number

  public constructor(public x: number, public y: number) {
    //this.x = x
    //this.y = y
  }

  public sum(): number {
    return this.x + this.y
  }
}

let point: Point = new Point(1, 2)

point.sum()
const p: number = point.x + point.y
