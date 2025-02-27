
const currencyData = {
  loadCurrnecy: true,
  errorLoad: null,
  ratescurrency: {},

};

export default function currencyReducer(state = currencyData, action) {
  switch (action.type) {
    case "showError": {
      return { ...state, errorLoad: action.payload };
    }
    case "getStateLoad": {
      return { ...state, loadCurrnecy: action.payload };
    }
    case "getRates": {
      return { ...state, ratescurrency: action.payload, errorLoad: null };
    }
    
    default: {
      return state;
    }
  }
}

export function fetchCurrency() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "getStateLoad", payload: true });
      const res = await fetch("https://api.frankfurter.dev/v1/latest");
      const data = await res.json();
      //here you bring all erros and throw in Catch Block
      if (!res.ok) {
        throw new Error("failed errors");
      } else {
        const rates = data.rates;
        dispatch({ type: "getRates", payload: rates });
        dispatch({ type: "getStateLoad", payload: false });
      }
    } catch (error) {
      dispatch({ type: "showError", payload: "Failed To Fetch " });
    }
  };
}

