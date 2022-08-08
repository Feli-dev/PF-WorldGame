import React, { useMemo } from "react";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);



let labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; //eje x

const options = {
  responsive: true,
  scale: {
    y: {
      min: 0,
    },
  },
  maintainAspectRatio: false,
};

function UserGraph() {
  let allRealUsers = useSelector((state) => state.userReducer.users.length)

  let numUsers = [22, 5, 85, 21, 25, 41, 56, allRealUsers]; // eje y
  let data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Registered Users",
          data: numUsers,
          fill: false,
          borderColor: "rgb(23, 158, 230)",
          tension: 0.2,
          pointRadius: 10,
        },
      ],
      labels,
    };
  }, []);
  return <Line data={data} options={options} />;
}

export default UserGraph;
