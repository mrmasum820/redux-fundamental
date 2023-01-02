//work with multiple reducers

//products -> getProducts, addProducts
//cart -> getCartItems, addCartItems

import { combineReducers, createStore } from "redux";

//product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

//cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';


//product initial state
const productsInitialState = {
    products: ['rice'],
    numberOfProducts: 1
}

//cart initial state
const cartInitialState = {
    carts: ['oil'],
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

//cart actions
const getCarts = () => {
    return {
        type: GET_CART_ITEMS
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
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

//cart reducers
const cartReducers = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEMS:
            return {
                carts: [...state.carts, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state
    }
}

//combine reduces -> object
const rootReducers = combineReducers({
    productR: productReducers,
    cartR: cartReducers
})

//store
// const store = createStore(productReducers);
// const store = createStore(cartReducers);
const store = createStore(rootReducers);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct('sugar'));
store.dispatch(getCarts());
store.dispatch(addCart('sugar'));