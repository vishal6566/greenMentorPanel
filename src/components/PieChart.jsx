import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {


 const data = {
  labels: ['Adani', 'Reliance', 'Eskos', 'Merion', 'Ruzette', 'Steller','Rezicure','Shaurya','Orlife'],
  datasets: [
    {
      label: 'CO2',
      data: [12, 19, 3, 5, 2, 3,8,9,4],
      backgroundColor: [
        '#7c95ea',
        '#544b8d',
        '#b54f69',
        '#e994b1',
        '#3bb85e',
        'cyan',
        '#ffc400',
        'brown',
        'red'

      ],
      borderColor: [
        '#7c95ea',
        '#544b8d',
        '#b54f69',
        '#e994b1',
        '#3bb85e',
        'cyan',
        '#ffc400',
        'brown',
        'red'
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div><Doughnut data={data} />;</div>
  )
}

export default PieChart