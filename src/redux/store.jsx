import { configureStore } from "@reduxjs/toolkit";
import mainCardReducer from "./MainCard";
import currencyReducer, { fetchCurrency} from "./ExchangeRate";
import { fetchData } from "./MainCard";
import currencyMetalReducer, { fetchCurrinces, fetchMetalData } from "./CuurencyGold";
import incomeReducer,{getIncome} from "./Income";

const store = configureStore({
    reducer:{
        mainCard:mainCardReducer,
        currency:currencyReducer,
        currencyMetal:currencyMetalReducer,
        incomeExpenses:incomeReducer
    }
})
store.dispatch(fetchData())
store.dispatch(fetchCurrency())

store.dispatch(fetchCurrinces())
store.dispatch(fetchMetalData())
store.dispatch(getIncome())

export default store;