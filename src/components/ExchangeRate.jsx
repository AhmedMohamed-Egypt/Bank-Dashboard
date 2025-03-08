import { useEffect, useState } from "react";

import Cash from "./Cash";
import NonCash from "./NonCash";

import { useDispatch, useSelector } from "react-redux";
import SelectCurrencies from "./SelectCurrencies";
import SelectMetal from "./SelectMetal";
import {
  
  fetchGold,
  hideErrorAfterTime,
} from "../redux/CuurencyGold";

function ExchangeRate(dataCurrency) {
  const dispatchRedux = useDispatch();
  const btns = ["Cash", "Non Cach", "Gold"];

  const [active, setActive] = useState(2);
  const {
    currencyValue,
    metalValue,
    loadingCG,
    resultData,
    errormetalCurrency,
  } = useSelector((store) => store.currencyMetal);
  const [error, setError] = useState(null);

  const handleConvert = () => {
    dispatchRedux(fetchGold(currencyValue, metalValue));
  };

  useEffect(() => {
    setError(errormetalCurrency);

    if (errormetalCurrency != null) {
      dispatchRedux(hideErrorAfterTime(errormetalCurrency));
    }
  }, [errormetalCurrency]);

  const { status, data } = resultData;
  //const {base_curency,}
  const valueSymbol = Object.values(data?.rates || {});
 
  return (
    <div className="bg-lightviolet rounded-[15px] p-[20px] xyz-exchangeRate w-[380px] mx-[30px]">
      <h2 className="font-pop font-semibold">Exchange Rate</h2>

      <div className="mt-[15px]">
        {btns.map((item, index) => (
          <button
            onClick={() => {{setActive(index)}}}
            key={index}
            className={`font-pop font-semibold text-size-14 ${
              index === 1 ? "mx-[25px]" : ""
            } ${active === index ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-[15px]">
        {active === 0 && <Cash />}
        {active === 1 && <NonCash />}
        {active === 2 && (
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-[47%]">
              <SelectCurrencies/>
            </div>
            <div className="w-[47%]">
              <SelectMetal />
            </div>

            <div className="w-full">
              <button
                className="button bg-black rounded-[6px] px-[15px] py-[7px] text-white mt-[15px]"
                onClick={() => handleConvert()}
              >
                {(error != null)
                  ? "Try Again"
                  : loadingCG
                  ? "Converting"
                  : "Convert"}
              </button>
              {
                
              }
              <p
                className={`bg-red-400 text-grey-500 rounded-md mt-5 font-semibold ${
                 ( error != null  ) && "p-1 pl-[15px]"
                }`}
              >
                {(error != null ) ? errormetalCurrency : ""}
              </p>
              <div>
                {error==null && status === "success"   ? (
                  <>
                    <p className="bg-black text-white p-[10px] rounded-md">
                      {`1 ${data.symbols} = ${valueSymbol} ${data.base_currency}`}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/*fetch Data */}
    </div>
  );
}

export default ExchangeRate;
