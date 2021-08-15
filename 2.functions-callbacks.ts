export function printToFile(text: string, callback: () =>  void): void {
    console.log(text)
    callback()
}

//type keyword
export type CallbackFunction = (v: number) => number

export function arrayMutate(numbers: number[], mutate: CallbackFunction): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3], (v) => v * 10))

//closure
export function createAdder(num: number): CallbackFunction {
    return (val: number) => num + val
}
const addOne = createAdder(3)(4)
console.log(addOne)