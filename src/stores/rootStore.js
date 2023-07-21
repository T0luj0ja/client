import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import RootReducer from  "./rootReducer" ;
import thunk  from "redux-thunk";

const store  = configureStore ({reducer: rootReducer}, applyMiddleware( thunk) )

export default store;