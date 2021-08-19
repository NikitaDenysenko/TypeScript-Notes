//optional parametr
const printIngredient = (quantity: string, ingredient: string, extra?: string): void => {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`)
}
printIngredient('32', 'tea')
printIngredient('32', 'tea', 'more suguar')

//optional fields
interface IUser {
    id: string
    info?: {
        email?: string
    }
}

const getEmail = (user: IUser): string => {
    return user.info?.email || "no info on the user"
}

const testUser: IUser = {
    id: '234',
    info: {
        email: 'test@email.com'
    }
}
console.log(getEmail(testUser))

//optional callbacks

const addWithCallBack = (x: number, y:number, callback?: () => void) => {
    console.log([x,y])
    callback?.();
}