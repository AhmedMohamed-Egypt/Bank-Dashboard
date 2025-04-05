const initialState = {
  bankIncome: {},
  loadingIncome: false,
  errorIncome: null,
};

export default function incomeReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchIncome": {
      return { ...state, bankIncome: action.payload };
    }
    case "loadIncome": {
      return { ...state, loadingIncome: action.payload };
    }
    case "fetchErrorIncome": {
      return { ...state, errorIncome: action.payload };
    }
    default: {
      return state;
    }
  }
}

//fetch data income

export function getIncome() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "loadIncome", payload: true });
      const data = await fetch("http://localhost:8000/income");
      if (!(data.ok)) {
        dispatch({ type: "fetchErrorIncome", payload: 'no connection' });
      } else {
        const res = await data.json();
        dispatch({ type: "fetchIncome", payload: res });
        dispatch({ type: "loadIncome", payload: false });
      }
    } catch (error) {
      if (error.name === "TypeError") {
        error.message = "Connection Failed";
        dispatch({ type: "fetchErrorIncome", payload: error });
      }else {
        dispatch({ type: "fetchErrorIncome", payload: error });
        throw new Error("there is an error");
      }
   
    }
  };
}
