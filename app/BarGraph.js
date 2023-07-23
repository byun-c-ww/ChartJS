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


export default function BarGraph(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
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
  let days = {}
  let device1 = {}
  let device2 = {}
  let device3 = {}
  let device4 = {}

  for (let day of props.price) {
    days[day[0]] = true
    device1[day[0]] = 0
    device2[day[0]] = 0
    device3[day[0]] = 0
    device4[day[0]] = 0
  }
  let daysLen  = Object.keys(days).length
  for (let i = 0; i < props.price.length; i++) {
    let day = props.price[i]
    if (day[1] === 'A1000') {
      device1[day[0]] += day[2]
    }
    if (day[1] === 'A1030') {
      device2[day[0]] += day[2]
    }
    if (day[1] === 'A1031') {
      device3[day[0]] += day[2]
    }
    if (day[1] === 'A1042') {
      device4[day[0]] += day[2]
    }
  }
  let labels = []
  for (let label of Object.keys(days)) {
    labels.push(label)
  }
  device1 = Object.values(device1)
  device2 = Object.values(device2)
  device3 = Object.values(device3)
  device4 = Object.values(device4)

  const data = {
    labels,
    datasets: [
      {
        label: 'Device 1',
        // data: labels.map((year) => {
        //   prices.map((price) => {
        //     if (year === price[0]) {
        //       return price[1]
        //     }
        //   })}
        // ),
        // backgroundColor: 'rgba(255, 99, 132, 0.8)',
        data: labels.map((label,i) => {
          return device1[i]}),
        backgroundColor: 'rgba(255, 55, 55, 0.8)',
      },
      {
        label: 'Device 2',
        data: labels.map((label,i) => { 
          return device2[i]}),
        backgroundColor: 'rgba(53, 255, 55, 0.8)',
      },
      {
        label: 'Device 3',
        data: labels.map((label,i) => { 
          return device3[i]}),
        backgroundColor: 'rgba(53, 162, 235, 0.8)',
      },
      {
        label: 'Device 4',
        data: labels.map((label,i) => { 
          return device4[i]}),
        backgroundColor: 'rgba(255, 162, 235, 0.8)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
