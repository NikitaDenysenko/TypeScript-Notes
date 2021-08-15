type ThreeDCoordinate = [x: number, y: number, z: number]

const addThreeDCoordinate = (c1: ThreeDCoordinate, c2:ThreeDCoordinate): ThreeDCoordinate => {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(addThreeDCoordinate([37,31,31],[10,30,40]))

//simpleStringState is like a useState()
const simpleStringState = (initial: string): [() => string,(v: string) => void] => {
    let str: string = initial
    return [
        () => str,
        (v:string) => {
            str = v
        }
    ]
}

const [strGetter, strSetter] = simpleStringState('hello')
const [otherGetter, otherSetter] = simpleStringState('Joe')
console.log(strGetter())
console.log(otherGetter())
strSetter("there")
otherSetter("Doe")
console.log(strGetter())
console.log(otherGetter())
