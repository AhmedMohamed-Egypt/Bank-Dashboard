import { FetchData } from "../hooks/FetchData";
const initialState = {
  currencyValue: "",
  metalValue: "",
  currencies: [],
  metals: [],
  loadCurrencyGold: false,
};

export default function currencyMetalReducer(state = initialState, action) {
  switch (action.type) {
    case "getAllCurrinces": {
      return { ...state, currencies: action.payload };
    }
    case "getMetal": {
      return { ...state, metals: action.payload };
    }
    case "fetchMetalValue": {
      const metalValue = action.payload?.value;
      return { ...state, metalValue: metalValue };
    }
    case "getchCurrencyValue": {
      const currencyValue = action.payload?.value;
      return { ...state, currencyValue: currencyValue };
    }
    default: {
      return state;
    }
  }
}

export function fetchGold(curr, metal) {
  return async function (dispatch, getState) {
    try {
      const data = await fetch(
        `https://metals-prices-rates-api.p.rapidapi.com/latest?base=${curr}&symbols=${metal}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "13f6d8a0admshacd64ffa57b14cap1a8b1ajsn8c7fab47821d",
            "x-rapidapi-host": "metals-prices-rates-api.p.rapidapi.com",
          },
        }
      );

      if (!data.ok) {
        throw new Error("Failed ahmed");
      } else {
        const res = await data.json();
      }
    } catch (error) {
        console.log(error.name)
    if(error.name==='TypeError'){
        error.message = 'Connection error'
        console.log('Connection error')
    }
    }
  };
}

export function fetchCurrinces() {
  return async function (dispatch, getState) {
    const currenciesData = FetchData("http://localhost:8000/currencies", {
      method: "GET",
    });
    const data = await currenciesData();
    dispatch({ type: "getAllCurrinces", payload: data });
  };
}

export function fetchMetalData() {
  return async function (dispatch, getState) {
    const metalData = FetchData("http://localhost:8000/metals", {
      method: "GET",
    });
    const data = await metalData();
    dispatch({ type: "getMetal", payload: data });
  };
}
export function getMetalValue(value) {
  return { type: "fetchMetalValue", payload: value };
}

export function getCurrencyValue(value) {
  return { type: "getchCurrencyValue", payload: value };
}
