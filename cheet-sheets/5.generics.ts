//generic function
const simpleState = <T>(initial: T): [() => T, (v: T) => void] => {
  let val: T = initial
  return [
    () => val,
    (v: T) => {
      val = v
    }
  ]
}

const [state1Getter, state1Setter] = simpleState(10)
console.log(state1Getter())
state1Setter(32)
console.log(state1Getter())

//overriding inferred generic type
const [state2Getter, state2Setter] = simpleState<string | null>(null)
console.log(state2Getter())
state2Setter('str')
console.log(state2Getter())

//generic iterface
interface Rank<RankerItem> {
  item: RankerItem
  rank: number
}

const ranker = <RankerItem>(
  items: RankerItem[],
  rank: (v: RankerItem) => number
): RankerItem[] => {
  const ranks: Rank<RankerItem>[] = items.map(item => ({ item, rank: rank(item) }))

  ranks.sort((a, b) => a.rank - b.rank)

  return ranks.map(rank => rank.item)
}

interface Pokemon {
  name: string,
  hp: number
}

const pokemons: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20
  },
  {
    name: 'Pikachu',
    hp: 10
  },
  {
    name: 'Megasaur',
    hp: 30
  },
]

console.log(ranker(pokemons, ({hp}) => hp))