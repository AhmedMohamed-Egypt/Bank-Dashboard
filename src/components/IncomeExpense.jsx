import { useSelector } from "react-redux";
import BasicTabs from "../ui-components/BasicTabs";
import PieChartWithCenterLabel from "../ui-components/PieChart";
import { useEffect, useReducer } from "react";
import { NumericFormat } from 'react-number-format';



const initialState={
  dataWeek:[],
  dataYear:[],
  dataMonthly:[],
  
  
}

function reducer(snState,action){
  switch(action.type){
    case 'fetchDataChart':{
     
      const getWeek = [{value:action.payload.weekly.salary,color:"#7f8c8d",label:'Salary'},{value:action.payload.weekly.expenses,color:"#3498db",label:'Expenses'}]
      const getMonth = [{value:action.payload.monthly.salary,color:"#B147F2",label:'Salary'},{value:action.payload.monthly.expenses,color:"#03A9FA",label:'Expenses'}]
      const getYear = [{value:action.payload.yearly.salary,color:"#9980FA",label:'Salary'},{value:action.payload.yearly.expenses,color:"#0652DD",label:'Expenses'}]
      return {...snState,dataWeek:getWeek,dataYear:getYear,dataMonthly:getMonth}
    }
    default:{
      return {...snState}
    }
  }
}

function IncomeExpense() {
  // <PieChartWithCenterLabel data= {data} />
  const { bankIncome, loadingIncome, errorIncome } = useSelector(
    (store) => store.incomeExpenses
  );

  const [{dataWeek,dataMonthly,dataYear},dispatch] = useReducer(reducer,initialState)

 
  useEffect(()=>{
    if(!loadingIncome){
      dispatch({type:'fetchDataChart',payload:bankIncome})
     
    }
  },[loadingIncome])
  function FetchCart({ data }) {
     const balanceData = loadingIncome?[]:data
     const balance = balanceData.reduce((acc,curr)=>{
         return (+acc) + (+curr.value)
     },0)
   function getSalryExpenses(dataParam,type){
    let item = ''
    dataParam.reduce((acc,cur)=>{
      if(cur.label===type){
        item=cur.value
        return cur.value
      }else {
        return acc
      }
     },[])

     return item
   }
   const salary = getSalryExpenses(balanceData,'Salary')
   const expenses = getSalryExpenses(balanceData,'Expenses')
   
  
    return (
      <>
        {errorIncome !== null ? (
          errorIncome
        ) : loadingIncome ? (
          "Fetching"
        ) : (
         <div className="flex">
           <PieChartWithCenterLabel data={data} />
          <div>
        <div className="translate-x-[-80px] translate-y-[50px] w-[180px]">
        <div className="non-bk-input flex items-center  border-b-[1px] border-grey200 pb-[5px] mb-[5px]">
        <p className="text-size-18 text-violet font-semibold"><span className="inline-block w-[80px]">Balance:</span>  </p>
        <p className="text-size-18 font-medium">&nbsp;<NumericFormat value={balance} allowLeadingZeros  thousandSeparator="," /></p>
        </div>
        <div>
          <span></span>
          <p className=" font-bold border-b-[1px] border-grey200 pb-[5px] mb-[5px]"><span className="inline-block w-[80px]">Salary:</span><span className="font-semibold">{salary}</span></p>
          <p className=" font-bold "><span className="inline-block w-[80px]">Expenses:</span><span className="font-semibold">{expenses}</span></p>
         
        </div>

      

        </div>
      </div>
         </div>
        )}
      </>
    );
  }

  return (
    <div className="income-expense-pie-chart w-[630px] rounded-[10px] mt-[15px] flex items-center">
      <div className="max-w-full overflow-hidden">
        <BasicTabs
          stateTab={1}
          classes="income-expense-pie-chart__basicTab"
          compOne={<FetchCart data={dataWeek} />}
         
            
          compTwo={<FetchCart data={dataMonthly} />}
          compThree={<FetchCart data={dataYear} />}
            
          navOne={"week"}
          navTwo={"month"}
          navThree={"year"}
        />
      </div>
      
    </div>
  );
}

export default IncomeExpense;
