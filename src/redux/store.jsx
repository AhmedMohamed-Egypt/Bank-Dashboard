import { configureStore } from "@reduxjs/toolkit";
import mainCardReducer from "./MainCard";
import { fetchData } from "./MainCard";

const store = configureStore({
    reducer:{
        mainCard:mainCardReducer
    }
})
store.dispatch(fetchData())
export default store;