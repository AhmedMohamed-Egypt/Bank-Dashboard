import { useDispatch, useSelector } from "react-redux"
import ReactSelect from "../ui-components/ReactSelect"
import { useEffect, useState } from "react";
import { getMetalValue } from '../redux/CuurencyGold';

function SelectMetal() {
    const {metals} = useSelector((store)=>store.currencyMetal)
    const [value,setValue] = useState(null)
    const dispatchRedux = useDispatch();
    
  useEffect(()=>{
    dispatchRedux(getMetalValue(value))
  },[value])

    const modifyData = metals.map((item)=>{
        return {value:item.symbol,label:item.name}
    })
    return (
       <ReactSelect options={modifyData} onChange={setValue} defaultValue={value}/>
    )
}

export default SelectMetal
