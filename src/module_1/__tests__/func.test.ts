import { getAvarage } from "../func"

test("func getAvarage", () => {
  const total: number = getAvarage(1, 2, 3)
  expect(total).toBe(1)
})
