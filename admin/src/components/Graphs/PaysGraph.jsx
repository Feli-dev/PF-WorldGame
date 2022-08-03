import React, { useMemo } from "react";
import {useSelector } from "react-redux";
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

import {Pie} from 'react-chartjs-2'

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

  

const options = {
    responsive: true,
    maintainAspectRatio: false
}

function PaysGraph() {
    let {totalUsers, totalPremium} = useSelector(state => state.userReducer) 
    
    let data = useMemo(() => {
        return{
            labels: ['Premium', 'Normal'],
            datasets: [
              {
                label: `Total users: ${totalUsers}`,
                data: [totalPremium, totalUsers-totalPremium],
                backgroundColor: [
                  'rgb(23, 158, 230)',
                  'rgba(133, 139, 133 , 0.5)',
                  
                ],
                borderColor: [
                  'rgba(133, 139, 133)',
                  'rgba(23, 158, 230)',
                ],
                borderWidth: 1,
              },
            ],
          };
    },[totalUsers, totalPremium])
  return (
    
        <Pie data={data} options={options}/>
    
  );
}

export default PaysGraph;