interface Coordinate {
    x: number
    y: number
}

function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(str: string): Coordinate
function parseCoordinate (arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if(typeof arg1 === 'object') {
        coord = {
            ...arg1 as Coordinate
        } 
    } 
    if (typeof arg1 === 'number') {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    if(typeof arg1 === 'string') {
        const xCoord = Number(arg1.split(',')[0].split(':')[1])
        const yCoord = Number(arg1.split(',')[1].split(':')[1])
        coord = {
            x: xCoord,
            y: yCoord
        }
    }

    return coord
}
console.log(parseCoordinate(32,42))
console.log(parseCoordinate({x: 53, y: 92}))
console.log(parseCoordinate("x:12,y:43"))