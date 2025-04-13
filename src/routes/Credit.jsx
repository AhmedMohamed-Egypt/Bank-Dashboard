import { useDispatch, useSelector } from "react-redux";
import CardTemplate from "../components/CardTemplate";
import Layout from "../ui-components/Layout";
import { useEffect, useReducer, useState } from "react";
import Overlay from "../ui-components/Overlay";
import ReactSelect from "../ui-components/ReactSelect";
import { getCards, getData, postData } from "../redux/CreditCards";
import SalaryCharts from "../components/SalaryCharts";
const regex = /^\d{16}$/;
const formatCardNumber = (valueParam) => {
  // Remove all non-digit characters
  const digitsOnly = valueParam.replace(/\D/g, "");
  // Add a space every 4 digits
  return digitsOnly.replace(/(.{4})/g, "$1 ").trim();
};
const initialState = {
  selCardType: [{ value: "", label: "" }],
  selCrdAccount: "",
  crdCurrency: [{ value: "USD", label: "USD" },{ value: "EUR", label: "EUR" },{ value: "CAD", label: "CAD" },{ value: "AUD", label: "AUD" }],
  accountBalance: "",
  dataForm: {},
  errorCrdAccount: null,
  errorForm:null
};

function validateCardNumber(val){
  const num = formatCardNumber(val)
 return num
}


function reducer(snState, action) {
  switch (action.type) {
    case "prepareData": {
      const arraySelCardType = action.payload.map((item) => {
        return { value: item.id, label: item.theme };
      });
     

      return {
        ...snState,
        selCardType: arraySelCardType,
       
      };
    }
    case "collectDispatch": {
     
      
      const getCrdAccount = action.payload.dataForm.selCrdAccount? (validateCardNumber(action.payload.dataForm.selCrdAccount)):"";
      
      const getAccountBalance = !isNaN(action.payload.dataForm.accountBalance)?(action.payload.dataForm.accountBalance):'' || "";
      const getErrorAccount = regex.test(getCrdAccount) ? true : false;
     
      return {
        ...snState,
        errorCrdAccount: getErrorAccount,
        selCrdAccount: getCrdAccount,
        accountBalance: getAccountBalance,
        dataForm: { ...snState.dataForm, ...action.payload.dataForm },
      };
    }
    case 'emptyOutFields':{
      return {...initialState, selCardType: snState.selCardType}
    }
    case 'fetchErrorForm':{
      return {...snState,errorForm:true}
    }
    case 'hideErrorForm':{
      return {...snState,errorForm:null}
    }
    default: {
      return { ...snState };
    }
  }
}

function Credit() {
  const { creditCards, loadCards, errorCards,erorrEdit } = useSelector(
    (store) => store.cardReducer
  );
  
  const [active, SetActive] = useState(false);
  const dispatchRedux = useDispatch()
  useEffect(() => {
    if (!loadCards || creditCards.length>0) {
      dispatch({ type: "prepareData", payload: creditCards });
    }
  }, [loadCards]);
  //reducer

  const [
    { selCardType, selCrdAccount, crdCurrency, accountBalance, dataForm,errorForm },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleDataToredux=(data)=>{
   
    if(data.accountBalance?.length>0&&data.selCrdAccount?.length>16&&data.crdCurrencyValue!==''&&data.selCardTypeValue!==''){
      dispatchRedux(postData(data))
      SetActive(false)
      dispatch({type:'emptyOutFields'})
    }else {
      dispatch({type:'fetchErrorForm'})
      setTimeout(()=>{
        dispatch({type:'hideErrorForm'})
      },1500)
    }
    
   
   
  }
  return (
    <Layout>
      <div className="flex">

     
      <div className="bg-lightviolet w-[650px] rounded-lg p-[20px]">
        <div className="mb-[25px] flex justify-between">
          <h2 className="font-pop text-size-18 font-semibold">My Cards</h2>
          <button
            onClick={() => SetActive(true)}
            className="font-semibold text-size-18 text-violet100"
          >
            Edit
          </button>
        </div>

        {errorCards != null || loadCards ? (
          "loading" || { errorCards }
        ) : (
          <>
            <div className="flex flex-wrap justify-between">
              {creditCards.map((item) => (
                <CardTemplate
                  key={item.id}
                  theme={item.theme}
                  className={`${item.theme} mb-[10px]`}
                  cardType={item.cardType}
                  cardAccount={formatCardNumber(`${item.cardAccount}`)}
                  cardCurrency={item.cardCurrency}
                  accountBalance={item.accountBalance}
                />
              ))}
            </div>
          </>
        )}
        {active && (
          <Overlay onClick={() => SetActive(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="p-[20px] cntrElement w-[500px] bg-white rounded-lg shadow-md  editsCards"
            >
              <h2 className="font-semibold text-size-20 mb-3">Edit Account</h2>

              <div>
                <h2 className="text-[#333333f2] font-semibold  mb-2 block">
                  Select Card Profile
                </h2>
                <ReactSelect
                  defaultValue={[{ value: "", label: "Select Card" }]}
                  onChange={(e) =>
                    dispatch({
                      type: "collectDispatch",
                      payload: {
                        dataForm: { ...dataForm, selCardTypeValue: e },
                      },
                    })
                  }
                  options={selCardType}
                />
                <div className="mb-3 mt-3">
                  <label
                    htmlFor="account"
                    className="text-[#333333f2] font-semibold  mb-2 block"
                  >
                    Account Number 16 digits
                  </label>
                  <input
                    value={selCrdAccount}
                    maxLength="19"
                    onChange={(e) =>
                      dispatch({
                        type: "collectDispatch",
                        payload: {
                          dataForm: {
                            ...dataForm,
                            selCrdAccount: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-[#f3f4f6]  w-full px-[15px] py-[8px] rounded-[4px]"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <h2 className="text-[#333333f2] font-semibold  mb-2 block">
                    Select Currency
                  </h2>
                  <ReactSelect
                    defaultValue={[{ value: "", label: "Select Currency" }]}
                    onChange={(e) =>
                      dispatch({
                        type: "collectDispatch",
                        payload: {
                          dataForm: { ...dataForm, crdCurrencyValue: e },
                        },
                      })
                    }
                    options={crdCurrency}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label
                    htmlFor="account"
                    className="text-[#333333f2] font-semibold  mb-2 block"
                  >
                    Account Balance
                  </label>
                  <input
                    value={accountBalance}
                    onChange={(e) =>
                      dispatch({
                        type: "collectDispatch",
                        payload: {
                          dataForm: {
                            ...dataForm,
                            accountBalance: e.target.value,
                          },
                        },
                      })
                    }
                    type="text"
                    className="bg-[#f3f4f6]  w-full px-[15px] py-[8px] rounded-[4px]"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => SetActive(false)}
                    className="px-[25px] py-[10px] font-semibold rounded-md bg-red-500 text-white mr-[15px]"
                  >
                    Cancel
                  </button>
                  <button onClick={()=>handleDataToredux(dataForm)} className="px-[25px] py-[10px]  font-semibold rounded-md bg-violet text-white">
                    Save Changes
                  </button>
                </div>
                <p className={`${errorForm!=null?`bg-red-500 p-[5px] mt-[10px] text-center rounded-md text-white`:''}`}>{errorForm!=null&&'Check Errors'}</p>
              </div>
            </div>
          </Overlay>
        )}
      </div>
     <div className="bg-lightviolet p-[20px] rounded-lg flex-grow ml-[20px] items-start ">
     <SalaryCharts/>
     </div>
      
      </div>
    </Layout>
  );
}

export default Credit;
