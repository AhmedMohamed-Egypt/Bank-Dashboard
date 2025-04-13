const initialState = {
  creditCards: [],
  loadCards: false,
  errorCards: null,
  postDataArray: [],
  erorrEdit:null,
};

export default function CreditReducer(state = initialState, action) {
  switch (action.type) {
    case "loadCards": {
      const statusLoad = action.payload.status;
      const data = action.payload.dataCrds;
      return { ...state, creditCards: data, loadCards: statusLoad };
    }
    case "fetchErrorscrds": {
      return { ...state, errorCards: action.payload };
    }

    case "collectData": {
      
      return { ...state, postDataArray: action.payload };
    }
    case 'updateCredit':{
        const res = action.payload
        const updateCreditCard = state.creditCards.map((item)=>{
            if(item.id===res.id){
                item = res
                return item
            }else {
                return item
            }
          
        })
       
        return {...state,creditCards:updateCreditCard,erorrEdit:null}
    }
    case 'fetchErrorEdit':{
        return {...state,erorrEdit:action.payload}
    }
    default: {
      return state;
    }
  }
}

export function getCards() {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "loadCards", payload: { status: true, dataCrds: [] } });
      const data = await fetch("http://localhost:8000/creditsCards");
      const res = await data.json();

      if (!data.ok) {
        throw new Error("Error Connection");
      }
      dispatch({
        type: "loadCards",
        payload: { status: false, dataCrds: res },
      });
    } catch (error) {
      if (error.name === "TypeError") {
        error.message = "Bad Link";
        dispatch({ type: "fetchErrorscrds", payload: error.message });
      }
      dispatch({ type: "fetchErrorscrds", payload: error.message });
    }
  };
}

export function getData(dataForm) {
  return { type: "collectData", payload: dataForm };
}

export function postData(postDataArray) {
  return async function (dispatch, getState) {
   
     const editData = {id:postDataArray.selCardTypeValue.value,cardType:postDataArray.selCardTypeValue.label,cardAccount:postDataArray.selCrdAccount,cardCurrency:postDataArray.crdCurrencyValue.label,accountBalance:postDataArray.accountBalance,theme:postDataArray.selCardTypeValue.label}
     try{
        const data = await fetch(`http://localhost:8000/creditsCards/${postDataArray.selCardTypeValue.value}`, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(editData),
            headers: {
              "Accept": "application/JSON",
              "Content-Type": "application/json",
            },
          });
          if(data.ok){
            const res = await data.json()
            dispatch({type:'updateCredit',payload:res})
          }
         
          
          throw new Error('Connection Error')
          
     }catch(error){
        error.message = "There is an error , Try Again"
       dispatch({type:'fetchErrorEdit',payload:error.message})
     }
   
    
  };
}
