export interface IMenu {
  title: string
  children?: IMenu[]
}

export function generateMenu(menuList: IMenu[]): string {
  const liElements = menuList
    .map<string>((menu: IMenu) => {
      let txt = `<li><a>${menu.title}</a></li>`
      if (menu.children) {
        txt += `${generateMenu(menu.children)}`
      }
      return txt
    })
    .join("\n")
  return `<ul>${liElements}</ul>`
}
