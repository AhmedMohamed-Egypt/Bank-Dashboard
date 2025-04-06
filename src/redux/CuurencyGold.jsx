import { FetchData } from "../hooks/FetchData";
const initialState = {
  currencyValue: "",
  metalValue: "",
  currencies: [],
  metals: [],
  loadingCG: false,
  resultData: {},
  errormetalCurrency: null,
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
    case "loadingCg": {
      const error = action.payload?null:state.errormetalCurrency

      return { ...state, loadingCG: action.payload,errormetalCurrency:error };
    }
    case "fetchData": {
      return { ...state, resultData: action.payload };
    }
    case "fetchError": {
      return { ...state, errormetalCurrency: action.payload,resultData:initialState.resultData};
    }
    case 'deleteError':{
     
  //    return {...state,errormetalCurrency:null,loadingCG:false}
    }
    default: {
      return state;
    }
  }
}

export function fetchGold(curr, metal) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "loadingCg", payload: true });
      const data = await fetch(
        `https://metals.g.apised.com/v1/latest?symbols=${metal}&base_currency=${curr}`,
        {
          method: "GET",
          headers: {
            "x-api-key": "sk_671a2036C9e443cc360A668e4d199e63c71FF8f4c1a9BaeF",
            method: "GET",
            redirect: "follow",
          },
        }
      );
      

      if (!data.ok) {
        throw new Error("Failed to fetch data try another curr/metal");
      } else {
        const res = await data.json();

        dispatch({ type: "loadingCg", payload: false });
        dispatch({ type: "fetchData", payload: res });
      }
    } catch (error) {
     
       if (error.name === "TypeError") {
       error.message = "Connection error";
        dispatch({ type: "fetchError", payload:  error.message });
      }
      dispatch({ type: "fetchError", payload:  error.message  });
     
     
     
      
       
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

export function hideErrorAfterTime(){
 

  return async function(dispatch){
    setTimeout(()=>{
      dispatch({ type: "deleteError"})
     },2500)
  }
}
