//state
//action - increment, decrement, reset
//reducer
//store

import { createStore } from "redux";

//CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const COUNT_BY_VALUE = 'COUNT_BY_VALUE';

const initialCounterValue = {
    count: 0,
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}
const resetCounterAction = () => {
    return {
        type: RESET,
    }
}
const incrementCountByValue = (value) => {
    return {
        type: COUNT_BY_VALUE,
        payload: value
    }
}

const counterReducer = (state = initialCounterValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case COUNT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }

        default:
            state
    }
}

//create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch action
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
//store.dispatch(resetCounterAction());
store.dispatch(incrementCountByValue(5));
store.dispatch(incrementCountByValue(10));