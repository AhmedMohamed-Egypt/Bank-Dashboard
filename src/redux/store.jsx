import { configureStore } from "@reduxjs/toolkit";
import mainCardReducer from "./MainCard";


const store = configureStore({
    reducer:{
        mainCard:mainCardReducer
    }
})

export default store;