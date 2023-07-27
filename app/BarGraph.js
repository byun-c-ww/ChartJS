import React, {useState} from 'react';
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

  ChartJS.defaults.font.size = 16;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: "rgb(0,0,0)",
          font: {
            size: 20
          }          
        },
      },
      title: {
        display: true,
        text: 'デバイス料金精算',
        font: {
          size: 30
        },
        color: "rgb(0,0,0)"
      },
      labels: {
        color: "rgb(0,0,0)"
      }
    },
    // scales: {
    //   yAxes: {
    //     color: "rgb(0,0,0)",
    //     text: "ryoukin"
    //   }}
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

  let datasets = [
    {
      label: 'Device 1',
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
  ]
  let filterList = props.filterDevice
  const allDevices = [
    "Device 1",
    "Device 2",
    "Device 3",
    "Device 4"
  ]
  const removedDevices = Array(allDevices.length).fill(0)
  for (let i = 0; i < filterList.length; i++) {
    let e = filterList[i]
    if (e === true && removedDevices[i] !== 0) {
      datasets[i] = removedDevices[i]
      removedDevices[i] = 0
    }
    else if (e === false) {
      removedDevices[i] = datasets[i]
      console.log(removedDevices[i])
      datasets = datasets.filter((dataset) => dataset.label !== allDevices[i])
      console.log(datasets)
    }
  }
  console.log(datasets)

  const data = {
    labels,
    datasets: datasets
  };

  // function addData(chart, label, newData) {
  //   chart.data.labels.push(label);
  //   chart.data.datasets.forEach((dataset) => {
  //       dataset.data.push(newData);
  //   });
  //   chart.update();
  // } 
  // addData(ChartJS,labels,dataset)
  // function removeData(chart) {
  //     chart.data.labels.pop();
  //     chart.data.datasets.forEach((dataset) => {
  //         dataset.data.pop();
  //     });
  //     chart.update();
  // }
  return <Bar options={options} data={data} />;
}
