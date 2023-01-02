//fetch data using redux-thunk

//async action api calling
//api url - https://jsonplaceholder.typicode.com/todos
//middleware - redux-thunk
//axios api

//state - request, success, faild

import axios from "axios"
import { applyMiddleware, createStore } from "redux"
// import thunk from "redux-thunk"
const thunk = require("redux-thunk").default;

//constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAILED = 'GET_TODOS_FAILED'
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

//initial state
const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null
}

//actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

//todos reducers
const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


//async action creator
const fetchData = (dispatch) => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get(API_URL)
            .then(res => {
                const todos = res.data;
                const title = todos.map((todo) => todo.title);
                dispatch(getTodosSuccess(title));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getTodosFailed(errorMessage));
            })
    }
}

//store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());