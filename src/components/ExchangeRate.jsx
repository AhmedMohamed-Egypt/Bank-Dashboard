import { useState } from "react";


import Cash from "./Cash";
import NonCash from "./NonCash";

import { useDispatch, useSelector } from "react-redux";
import SelectCurrencies from "./SelectCurrencies";
import SelectMetal from "./SelectMetal";
import { fetchGold } from "../redux/CuurencyGold";


function ExchangeRate(dataCurrency) {
  const dispatchRedux = useDispatch()
  const btns = ["Cash", "Non Cach", "Gold"];
 
  const [active, setActive] = useState(2);
  const {currencyValue,metalValue} = useSelector((store)=>store.currencyMetal)
 
  const handleConvert=()=>{
    console.log(currencyValue,metalValue)
    dispatchRedux(fetchGold(currencyValue,metalValue))
  }
  return (
    <div className="bg-lightviolet rounded-[15px] p-[20px] xyz-exchangeRate w-[350px]">
      <h2 className="font-pop font-semibold">Exchange Rate</h2>

      <div className="mt-[15px]">
        {btns.map((item, index) => (
          <button
            onClick={() => setActive(index)}
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
     {active===0&&<Cash/>}
     {active===1&&<NonCash/>}
     {active===2&& <div className="flex items-center justify-between flex-wrap">
      <div className="w-[47%]"><SelectCurrencies /></div>
      <div className="w-[47%]"><SelectMetal/></div>
      
      <div className="w-full">
        <button className="button bg-black rounded-[6px] px-[15px] py-[7px] text-white mt-[15px]" onClick={()=>handleConvert()}>Convert</button>
      </div>
     </div>}


      </div>
    </div>
  );
}

export default ExchangeRate;
