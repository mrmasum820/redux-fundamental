//work with middleware(redux-logger)


import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// const logger = require('redux-logger').default;

//product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';


//product initial state
const productsInitialState = {
    products: ['rice'],
    numberOfProducts: 1
}


//product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}


//product reducers
const productReducers = (state = productsInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state
    }
}

//store
const store = createStore(productReducers, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct('sugar'));