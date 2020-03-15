import { listToTree, Tree } from "../list-to-tree"

interface Folder {
  id: number
  parentId?: number
  name: string
}

test("listToTree", () => {
  const folders: Folder[] = [
    {
      id: 14,
      parentId: 12,
      name: "folder_1_1",
    },
    {
      id: 13,
      parentId: 12,
      name: "folder_1_2",
    },
    {
      id: 12,
      parentId: null,
      name: "folder_1",
    },
    {
      id: 5,
      name: "folder_2",
    },
    {
      id: 6,
      name: "folder_2_1",
      parentId: 5,
    },
  ]

  const tree: Tree<Folder> = listToTree(folders, {
    getKey: (folder: Folder) => {
      return folder.id
    },
    getParentKey: (folder: Folder) => {
      return folder.parentId;
    }
  })

  expect(tree.rootNodes.length).toBe(2)
  expect(tree.rootNodes[0].children.length).toBe(2)
  expect(tree.rootNodes[0].children[0].data.name).toBe('folder_1_1')
  expect(tree.rootNodes[0].children[1].data.name).toBe('folder_1_2')

  expect(tree.rootNodes[1].data.name).toBe('folder_2')
  expect(tree.rootNodes[1].children.length).toBe(1)
  expect(tree.rootNodes[1].children[0].data.name).toBe('folder_2_1')
})
