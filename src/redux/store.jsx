import { configureStore } from "@reduxjs/toolkit";
import mainCardReducer from "./MainCard";
import currencyReducer, { fetchCurrency} from "./ExchangeRate";
import { fetchData } from "./MainCard";
import currencyMetalReducer, { fetchCurrinces, fetchMetalData } from "./CuurencyGold";

const store = configureStore({
    reducer:{
        mainCard:mainCardReducer,
        currency:currencyReducer,
        currencyMetal:currencyMetalReducer
    }
})
store.dispatch(fetchData())
store.dispatch(fetchCurrency())

store.dispatch(fetchCurrinces())
store.dispatch(fetchMetalData())

export default store;