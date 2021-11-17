import { starwarsReducer } from "./starwarsReducer/starwarsReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

// controlar opções assíncronas
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// create store
let store = createStore(starwarsReducer, composedEnhancer);

export default store;