/* intersection types ('&' sign)*/
type Admin = {
  name: string
  permitions: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const elevatedEmployee: ElevatedEmployee = {
    name: 'Nick',
    startDate: new Date(),
    permitions: ['edit', 'delete']
}

/* type guard  */
type Combinable = string | number
const sum = (a: Combinable, b: Combinable): Combinable => {
    if(typeof a === 'string' || typeof b === 'string') {
        return `${a} + ${b}`
    }
    return a + b
}
//in
type UnknwonEmployee = Admin | Employee
const printEmployeeData = (employee: UnknwonEmployee) => {
    console.log(`Name: ${employee.name}`)
    if('permitions' in employee) {
        console.log(employee.permitions)
    }
    if('startDate' in employee) {
        console.log(employee.startDate)
    }
}

/* discriminated uninon */
interface SportCar {
    type: 'sport',
    speed: number
}

interface FamilyCar {
    type: 'family',
    speed: number
}

type MyCar = SportCar | FamilyCar

const getSpeed = (car: MyCar): number => {
    switch (car.type) {
        case 'family':
            return 200
        case 'sport':
            return 400
        default:
            return 0;
    }
}

/* type casting ('as' keyword) */
const input = document.querySelector('input') as HTMLInputElement
const paragraph = <HTMLParagraphElement>document.querySelector('p')


/* index types */
interface indexTypes {
    [prop: string]: string
}

/* function overload */
function dec(a: number, b: number): number
function dec(a: string, b: string): string
function dec(a: string, b: number): string
function dec(a: number, b: string): string
function dec(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return `${a} -  ${b}`
    }
    return a - b
}

/* nullish coalescing ('??' sign) */
//checks for null or undefiend
const userInput = '';
const stroeData = userInput ?? 'The value is null or undefiend'