import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "../ui-components/ReactSelect";
import { useEffect, useState } from "react";
import { getCurrencyValue } from "../redux/CuurencyGold";

function SelectCurrencies() {
    const {currencies}=useSelector((store)=>store.currencyMetal)
    const [value,setValue] = useState(null)
    const dispatchRedux = useDispatch()
    const data = currencies.length>0?currencies.map((item)=>{
        return {value:item.alphabeticcode,label:item.currency}
    }):[{value:'',label:''}]

    useEffect(()=>{
        dispatchRedux(getCurrencyValue(value))
    },[value])

    return (
        <ReactSelect defaultValue={value} options={data} onChange={setValue}/>
    )
}

export default SelectCurrencies
