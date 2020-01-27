import ComparablePoint from "./interfaces/comparable-point"

export interface IPoint {
  sum(): number
}

export interface ICoord {
  x: number
  y: number
}

export class Point extends ComparablePoint implements IPoint, ICoord {
  //public x: number
  //public y: number

  public constructor(public readonly x: number, public y: number) {
    //this.x = x
    //this.y = y
    super()
  }

  public sum(): number {
    return this.x + this.y
  }

  public getComparableValue(): number {
    return this.getId() + 3
  }

  public getId(): number {
    return super.getId() + 2
  }
}

let point: Point = new Point(1, 2)

point.sum()
const p: number = point.x + point.y

