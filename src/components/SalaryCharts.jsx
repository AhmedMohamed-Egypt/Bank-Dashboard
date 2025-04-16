
import { fetchSalary } from '../hooks/FetchSalary';
import ReactSelect from '../ui-components/ReactSelect'
import React, { useEffect, useReducer } from 'react'
import ReactApexChart from 'react-apexcharts';
const data = { series: [{
  name:2018,
  data: [1,2,3]
}],
options: {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false,
    
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  }
  ,
  tooltip: {
    x: {
       format: 'dd MMMM yyyy'
    },
  },
 chart:{
    toolbar:{
        tools: {
            download: false,
            selection: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
      }
 },
 fill: {
  colors: ['#F44336', '#E91E63', '#9C27B0']
}
}}


function SalaryCharts() {
  const [state, setState] = React.useState({...data})
  const {dataSalary,errorSalary,loadSalary} = fetchSalary()
  const initialYear = dataSalary.length>0?dataSalary[0].year:2020
  const initialYears = dataSalary.length>0?dataSalary[0].salary:[]

  
   useEffect(()=>{
    setState({...state,series:[{
      name:initialYear,
      data:initialYears
    }]})
   },[loadSalary,errorSalary])
   


    const optionsSelect = loadSalary||errorSalary!=null ? []:dataSalary.map((item)=>{
      return {value:item.year,label:item.year}
    })
    const handleChange=(e)=>{
      const salaryYear = dataSalary.reduce((acc,cur)=>{
        if(cur.year===e.value){
          return [...acc,cur]
        }else {
          return [...acc]
        }
      },[])
      const yearArray = salaryYear.reduce((acc,cur)=>{
        return cur.salary
      },{})
    console.log(yearArray)
      setState({...state,series:[{
        name:e.value,
        data:yearArray
      }]
    })
    }
   
 
    
    return ((loadSalary||errorSalary!=null)?('loading'||errorSalary):<>
    <div className='flex-grow '>
          
           <div className='mb-[10px] flex items-center justify-between'>
               <h2 className='font-semibold text-size-20'>ShowCase Salary</h2>
               
               <ReactSelect options={optionsSelect} onChange={(e)=>handleChange(e)} defaultValue={{value:'',label:'Select Year'}}/>
           </div>
           <div id="chart" className='bg-white'>
               <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
             </div>
           <div id="html-dist"></div>
         </div>
    
    </>)

    
}

export default SalaryCharts
/*

*/ 