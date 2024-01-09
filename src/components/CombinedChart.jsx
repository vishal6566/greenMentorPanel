import React, { Component } from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);


const BarChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
      labels,
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data:  [160, 15, 10, 30, 25, 7, 50],
          yAxisID: 'line-y-axis', // Assigning the yAxisID for the line dataset
        },
        {
          type: 'line',
          label: 'Dataset 4',
          borderColor: 'cyan',
          borderWidth: 2,
          fill: false,
          data:  [16, 150, 100, 45, 50, 70, 70],
          yAxisID: 'line-y-axis', // Assigning the yAxisID for the line dataset
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgb(75, 192, 192)',
          data:  [200, 100, 100, 300, 600, 700, 500],
          borderColor: 'white',
          borderWidth: 2,
          yAxisID: 'bar-y-axis', // Assigning the yAxisID for the bar datasets
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: 'rgb(53, 162, 235)',
          data: [200, 100, 100, 300, 600, 700, 500],
          yAxisID: 'bar-y-axis', // Assigning the yAxisID for the bar datasets
        },
      ],
    };
    
    const options = {
      scales: {
        x: {
          type: 'category',
        },
        'bar-y-axis': {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Emission',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
        },
        'line-y-axis': {
          type: 'linear',
          position: 'right',
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: 'RC',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
        },
      },
     
      }
    
    
  return (
    <div style={{width:"800px",height:"800px"}}>
    <Chart type='bar' data={data} options={options} />;
  </div>
  );
};

export default BarChart;
