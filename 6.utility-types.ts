interface MyUser {
  name: string
  id: number
  email?: string
}
//Partial type - makes all keys optional
type MyUserOptionals = Partial<MyUser>

//Requiered type - makes all keys required
type RequieredMyUser = Required<MyUser>

//Pick type - picks the sets of prooperies Keys
type EmailAndName = Pick<MyUser, "name" | "email">

//Omit type - picks the sets of prooperies Keys and removes them
type UserWithoutID = Omit<MyUser, "id">

//ReadOnly - the properties of the constructed type cannot be reassigned
type MyUserReadOnlly = Readonly<MyUser>

//Record type - Constructs an object type whose property keys are Keys and whose property values are Type

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
    return users.reduce((accumulator, value) => {
        const {id, ...other} = value
        return {
            ...accumulator,
            [id]: other
        }
    }, {})
}

console.log(mapById([
    {
      name: 'Joe',
      id: 123,
      email: 'test@test.com'
    },
    {
      name: 'Doe',
      id: 634,
      email: 'email@email.com'
    }
]))

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(
  merge(
    {
      name: 'Joe',
      id:  123,
      email: 'test@test.com'
    },
    {
      email: 'overrided@test.com'
    }
  )
)
