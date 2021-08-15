//Basic Types
let userName: string = 'name'
let hasLoggedIn: boolean = true
let myNumber: number = 234
let myRegex: RegExp = /foo/

//Typing Array
const names: string[] = userName.split(' ')
const arrNubers: Array<number> = [1, 24, 5]

//Typing Objects
interface IPerson {
  name: string
  age: number
}
const person: IPerson = {
  name: 'Nikc',
  age: 20
}
const ids: Record<number, string> = {
  10: 'a',
  20: 'b'
}
ids[30] = 'c'

//TODO unkown vs any
//TODO as keyword