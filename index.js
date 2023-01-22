const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';


function buyCake() {
    // buyCake is an action creator which is a function that returns action
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer) // Creating a store
// Declare initial State and reducer
// Define actions and action creators
console.log(`Initial state: ${store.getState()}`)
const unsubscribe = store.subscribe(() => console.log('Updated state:', store.getState())) // subscribe to store

store.dispatch(buyCake()) // dispatch actions to update the store
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe() // unsubscribe to the changes