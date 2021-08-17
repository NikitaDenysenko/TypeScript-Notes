//example 1
const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map(item => item[key])
}

const dogs = [
  { name: 'Mimi', age: 12 },
  { name: 'LG', age: 13 }
]

console.log(pluck(dogs, 'name'))
console.log(pluck(dogs, 'age'))

//example 2
interface BaseEvent {
  time: number
  user: string
}
//& - sum of types
interface EventMap {
  addToCard: BaseEvent & {
    quantity: number
    productID: string
  }
  checkout: BaseEvent
}

const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void => {
    console.log([name, data])
}

sendEvent("addToCard",{productID: 'foo', user: 'Joe', quantity: 43, time: 85})
sendEvent("checkout",{time: 32, user: 'Doe'} )