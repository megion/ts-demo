import { getAverage } from "../func"

test("func getAvarage", () => {
  const total: number = getAverage(1, 2, 3)
  expect(total).toBe(1)
})
