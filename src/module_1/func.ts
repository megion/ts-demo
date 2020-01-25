type sn = string | number

//  param is string
function isString(param: sn): param is string {
  return typeof param === "string"
}

export function getAvarage(a: sn, b: sn, c: sn): number {
  let total: number = 0
  if (isString(a)) {
    total += parseInt(a, 10)
  } else {
    total += a
  }
  return total
}
