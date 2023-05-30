import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import MovieReducer from "./reduce/movieReducer";

const store = createStore(
    MovieReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;