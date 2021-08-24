/* number */
const myNum: number = 32
/* string */
const myStr: string = 'Hello'
/* undefined */
const myUndefined: undefined = undefined
/* null */
const myNull: null = null
/* boolean */
const isLoggedIn: boolean = true
/* object */
const myObject: {
  name: string
  age: number
} = {
  name: 'Nikc',
  age: 20
}
/* symboll */
const mySymboll: symbol = Symbol()

/* array */
const myArray1: number[] = [1, 2, 3, 4]
const myArray2: Array<number> = [1, 3, 4, 56, 9]

/* tuples (кортеж) - allows you to express an array with a fixed number of elements whose types are known  */
const myTupple: [string, boolean] = ['test', false]
//const myTupple2: [string, boolean] = [false, 'test'] -> will get error

/* enum - is a way of giving names to sets of numeric values  */
enum Color {
  Green, // -> 0
  Red, //-> 1
  BLUE = 'BLUE_COLOR' // -> BLUE_COLOR'
}
Color[1] // -> Red
Color.BLUE // -> BLUE_COLOR

/* any - store any type of value */
//Is used for easier migration from JS to TS
//Avoid using 'any' unless you really need an unsafe escape hatch
const myAny: any = 'I can be anything!😎'

/* unkown - describes the type of variables that we do not know (values from dynamic content) */
//Use 'unknown' where there will be a value, but it might have any type
//Use never in positions where there will not or should not be a value.
const myUnknown: unknown = 23

/* never - represents the type of values that never occur. */

/* void - the absence of having any type at all (function does not returns enything) */
const printHello = (): void => console.log('Hello')
function error (message: string): never {
  throw new Error(message)
}
/* function as type  */
type typedFunction = (a: number, b: number) => number

/* union type - allows us to use more than one data type for a variable or a function parameter */
const numberOrString: number | string = '43'

/* literal type -  allows an exact value which a string, number, or boolean must have */
const myLiteralType: 'on' | 'off' = 'on'

/* type allias (reusable type)  - makes a shorthand for a type */
type myType = 1 | 0
