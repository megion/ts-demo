export interface TreeNode<T> {
  data: T
  children?: TreeNode<T>[]
}

export interface TreeOptions<T, K> {
  getKey(item: T): K
  getParentKey(item: T): K
}

export interface Tree<T> {
  rootNodes: TreeNode<T>[]
}

function isNil(obj: any): boolean {
  return obj === null || obj === undefined
}

/**
 * transform plain list to tree
 * https://stackoverflow.com/questions/18017869/
 * build-tree-array-from-flat-array-in-javascript/45768527#45768527
 */
export function listToTree<T, K>(
  list: T[],
  opts: TreeOptions<T, K>,
): Tree<T> {
  const map: Map<K, number> = new Map<K, number>()
  const allNodes: TreeNode<T>[] = []

  // initialize map and children
  for (let i: number = 0; i < list.length; i++) {
    const item: T = list[i]
    allNodes.push({ data: item, children: [] })
    map.set(opts.getKey(item), i)
  }
  const tree: Tree<T> = { rootNodes: [] }
  for (let i: number = 0; i < allNodes.length; i++) {
    const node: TreeNode<T> = allNodes[i]
    const parentKey: K = opts.getParentKey(node.data)
    if (isNil(parentKey)) {
      tree.rootNodes.push(node)
    } else {
      allNodes[map.get(parentKey)].children.push(node)
    }
  }
  return tree
}
