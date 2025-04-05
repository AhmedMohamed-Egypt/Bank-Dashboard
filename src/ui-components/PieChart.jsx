import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

function CustomItemTooltip({data}){
  return <div>ahmed</div>
}

const size = {
  width: 400,
  height: 200,
 
 
  
};





export default function PieChartWithCenterLabel({data}) {
  return (
    <PieChart  series={[{ data, innerRadius: 70}]} {...size} data={data} slotProps={{ legend: { hidden: 'isHidden' } }}>
      
    </PieChart>
     
    
  );
}

