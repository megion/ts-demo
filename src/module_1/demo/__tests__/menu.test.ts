import { generateMenu } from "../menu"
import { IMenu } from "../menu"

test("generateMenu with one child", () => {
  const menuList: IMenu[] = [
    { title: "first", children: [{ title: "sub-first" }] },
  ]

  const htmlText = generateMenu(menuList)
  expect(htmlText).toBe(
    "<ul><li><a>first</a></li><ul><li><a>sub-first</a></li></ul></ul>",
  )
})
