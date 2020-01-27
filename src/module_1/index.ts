import IAccount from "./interfaces/account"
import Person from "./interfaces/person"
import { getAverage } from "./func"
import {Point} from "./point"
//import {generateMenu} from "./menu"

//Object.defineProperty(window, "MySweetApp", { value: "v.0.1", writable: false })

//function sendUpdates(emailAddr: string[]) {
//emailAddr.forEach((item: string, index: number) => {
//console.log(index)
//})
//}

//sendUpdates(["demo"])

const person1 = Person
const person2: Person = {
  age: 12,
  name: "n",
}

//person2.age

let isA: boolean | null = true

isA = null

// typeof obj - capture type of variable obj
const myPerson: typeof person2 = {
  age: 100,
  name: "bla",
}

//let person3: person1

let m: any = 1
m = "str"

// function return undefined
function check(a: number, b: number): void {
  if (a < b) {
    console.log("a<b")
  }
}

const hashMap: { [key: string]: number } = {}
hashMap.blabla1 = 1
hashMap.blabla2 = 2

const account: IAccount = {
  age: 22,
  name: "ivan",
}

account.age = 21

// arrays
const arr1: number[] = [1, 2]
const arr2: Array<number | string | IAccount> = [1, 2]
const arr3: ReadonlyArray<number | string | IAccount> = [1, 2]

arr2.push(1)
arr2.push(account)

// function declaration
//const myFunc: (a: string, b: string) => any

// cycle type g with optinal x
// type is alias for type g
type g = { x?: g }

const aa: g = {
  x: {
    x: {},
  },
}

interface IA {
  name: string | null
  //name2: string | null
}

class A implements IA {
  public name: string | null

  constructor() {
    this.name = null
  }
}

interface IMover {
  move(): void
  //getStatus(): { speed: number }
}

interface IShaker {
  shake(): void
  //getStatus(): { frequency: number }
}

interface IMoverResult {
  speed: number
  frequency: number
  total: number
}

interface IMoverIShaker extends IMover, IShaker {
  getStatus(): IMoverResult
}

const a: IMoverIShaker = {
  getStatus: function() {
    const r: IMoverResult = { speed: 0, frequency: 0, total: 0 }
    return r
  },
  move: function() {},
  shake: function() {},
}

interface ISquareConfig {
  color?: string
  width?: number
}

interface ISquare {
  color?: string
  area?: number
}

function createSquare(config: ISquareConfig): ISquare {
  const s: ISquare = {}
  console.log("config:", config)
  return s
}

createSquare({ colour: "", width: 22 } as ISquareConfig)

const base1: IBase = { field1: 1, field2: 2, field3: 3 }

interface IBase {
  field1: number
}

interface IBase {
  field2: number
}

interface IBase {
  field3: number
}

interface IHashMap<V> {
  [key: string]: V
}

interface IAA<T extends { aa: string; bb: number }> {
  field3: T
}

let vr: IAA<{ ss: string; aa: string; bb: number }>

const average = getAverage(1, 2, 3)
console.log(average)

const point: Point = new Point(1, 2)
point.sum()
