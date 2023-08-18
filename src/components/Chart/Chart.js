import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const monthlyMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => 
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={monthlyMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;