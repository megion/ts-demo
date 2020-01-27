import { Point } from "../point"

test("getId should be overrided", () => {
  const p: Point = new Point(1, 2)
  expect(p.getId()).toBe(4)
})

test("getComparableValue should use overrided getId", () => {
  const p: Point = new Point(1, 2)
  expect(p.getComparableValue()).toBe(7)
})
