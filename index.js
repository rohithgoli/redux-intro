const redux = require("redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'; // action
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake() {
    // buyCake is an action creator which is a function that returns action
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


// NOTE: When we dispatch an action both reducers receive it, one of it acts and other just ignores it
// When the Application grows in size, we can split the reducers in seperate files & keep them completely independent managing different areas
// such as authReducer, userReducer, ProfileReducer etc.. depending on appln needs
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer) // Creating a store
// Declare initial State and reducer
// Define actions and action creators
console.log(`Initial state: ${store.getState()}`)
const unsubscribe = store.subscribe(() => console.log('Updated state:', store.getState())) // subscribe to store

store.dispatch(buyCake()) // dispatch actions to update the store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe() // unsubscribe to the changes