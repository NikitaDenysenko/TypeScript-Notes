//enum
enum LoadingState {
    BEFORE_LOADED = 'BEFORE_LOADED',
    LOADING = 'LOADING',
    LOADED = 'LOADED'
}

const isLoading = (state: LoadingState): boolean => state === LoadingState.LOADING

console.log(isLoading(LoadingState.BEFORE_LOADED))

//Literal types
const rollDice = (dice: 1 | 2 | 3):number => {
    let pip: number = 0
    for (let index: number = 0; index < dice; index++) {
        pip += Math.floor(Math.random() * 5) + 1
    }
    return pip
}

function sendAction(name: 'addToCard', data: {productId: number}):void;
function sendAction(name: 'checkout', data: {cartCount: number}):void;
function sendAction(name: string, data: unknown): void {
    console.log(`${name} ${JSON.stringify(data)}`)
}
