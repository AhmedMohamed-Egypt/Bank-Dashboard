import { configureStore } from "@reduxjs/toolkit";
import mainCardReducer from "./MainCard";
import currencyReducer, { fetchCurrency} from "./ExchangeRate";
import { fetchData } from "./MainCard";
import currencyMetalReducer, { fetchCurrinces, fetchMetalData } from "./CuurencyGold";
import incomeReducer,{getIncome} from "./Income";
import operationReducer, { fetchOperation } from "./Operations";

const store = configureStore({
    reducer:{
        mainCard:mainCardReducer,
        currency:currencyReducer,
        currencyMetal:currencyMetalReducer,
        incomeExpenses:incomeReducer,
        operationTable:operationReducer
    }
})
store.dispatch(fetchData())
store.dispatch(fetchCurrency())

store.dispatch(fetchCurrinces())
store.dispatch(fetchMetalData())
store.dispatch(getIncome())
store.dispatch(fetchOperation())

export default store;