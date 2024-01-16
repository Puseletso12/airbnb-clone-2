import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./reducers/listingReducers";
// import { modalReducer } from "./reducers/modalReducer";

const reducer = combineReducers({
  listingList: listingListReducer,
});

// const userInfoFromLS = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const initalState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;















// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers, applyMiddleware } from "redux";
// import { thunk } from 'redux-thunk'
// import { composeWithDevTools } from "redux-devtools-extension"; 
// import { listingListReducer } from "./reducers/listingReducers";

// const reducer = combineReducers({listingList: listingListReducer});

// const initialState = {};

// const middleware = [thunk];

// const store = configureStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;