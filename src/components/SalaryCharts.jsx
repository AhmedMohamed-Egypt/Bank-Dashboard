
import ReactSelect from '../ui-components/ReactSelect'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

function SalaryCharts() {
    const [state, setState] = React.useState({
          
        series: [{
          name: 'series1',
          data: [2500, 3000, 3500, 5500, 8900, 9500, 11500,13200]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018", "2019", "2020", "2021", "2022", "2023", "2024","2025"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
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
         }
        },
      
      
    })
    return (
        <div className='flex-grow '>
            <div className='mb-[10px] flex items-center justify-between'>
                <h2 className='font-semibold text-size-20'>ShowCase Salary</h2>
                <ReactSelect defaultValue={{value:'',label:'Select Year'}}/>
            </div>
            <div id="chart" className='bg-white'>
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
              </div>
            <div id="html-dist"></div>
          </div>
    )
}

export default SalaryCharts
