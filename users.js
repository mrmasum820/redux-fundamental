//work with payload
import { createStore } from "redux";

const ADD_USER = 'ADD_USER'

const initialState = {
    users: ['masum'],
    count: 1
}

const userAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state
    }
}

const store = createStore(userReducer);
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(userAction('shawan'));