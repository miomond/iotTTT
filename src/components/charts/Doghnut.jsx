import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Hot', 'Cold'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 19],
      backgroundColor: [
        'rgb(255, 14, 8)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function Doghnut() {
  return <Doughnut data={data} />;
}
