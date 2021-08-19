//readonly tuples
const makeCoordinate = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z]
}

//immutable arrays
const reallyConst = [1,2,3] as const
