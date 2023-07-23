import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: "rgb(0,0,0)",
        size: 20,
      },
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: "rgb(0,0,0)"
    },
    labels: {
      color: "rgb(0,0,0)"
    }
  },
  // scales: {
  //   yAxes: {
  //     color: "rgb(0,0,0)"
  //   },
  //   xAxes: {
  //     color: "rgb(255,255,255)"
  //   },
  // }
};

const labels = ['2020','2021','2022','2023'];

const data = {
  labels,
  datasets: [
    {
      label: 'Device 1',
      data: labels.map((year) => year*0.5),
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
    {
      label: 'Device 2',
      data: labels.map((year) => year),
      backgroundColor: 'rgba(53, 255, 55, 0.8)',
    },
    {
      label: 'Device 3',
      data: labels.map((year) => year*2),
      backgroundColor: 'rgba(53, 162, 235, 0.8)',
    },
    {
      label: 'Device 4',
      data: labels.map((year) => year*2.5),
      backgroundColor: 'rgba(255, 162, 235, 0.8)',
    },
  ],
};

export default function BarGraph(price) {
  console.log(price)
  return <Bar options={options} data={data} />;
}
