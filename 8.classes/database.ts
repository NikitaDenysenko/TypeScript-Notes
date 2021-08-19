interface Database<T, K> {
  get(id: K): T
  set(id: K, value: T): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedString: string): void
}

type DBKeyType = string | number | symbol
class InmemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>
  get (id: K): T {
    return this.db[id]
  }
  set (id: K, value: T): void {
    this.db[id] = value
  }
}

class PersistantMemoryDB<T, K extends DBKeyType> extends InmemoryDatabase<T, K>
  implements Persistable {
  saveToString (): string {
    return JSON.stringify(this.db)
  }
  restoreFromString (storedString: string): void {
    this.db = JSON.parse(storedString)
  }
}

const myDB = new PersistantMemoryDB<number, string>()
myDB.set('fer', 43)
console.log(myDB.get('fer'))
console.log(myDB.saveToString())
