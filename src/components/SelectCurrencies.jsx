import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "../ui-components/ReactSelect";
import { useEffect, useReducer, useState } from "react";
import { getCurrencyValue } from "../redux/CuurencyGold";

function SelectCurrencies() {
  const { currencies } = useSelector((store) => store.currencyMetal);

  const dispatchRedux = useDispatch();

  const [val, setVal] = useState(null||JSON.parse(localStorage.getItem("currency")));

  const data =
    currencies.length > 0
      ? currencies.map((item) => {
          return { value: item.alphabeticcode, label: item.currency };
        })
      : [{ value: "", label: "" }];

  useEffect(() => {
    dispatchRedux(getCurrencyValue(val));
    localStorage.setItem("currency",JSON.stringify(val)||localStorage.getItem("currency"))
   
  }, [currencies,val]);

  return (
    <ReactSelect
      
      options={data}
      onChange={setVal}
      defaultValue={val}
    />
  );
}

export default SelectCurrencies;
