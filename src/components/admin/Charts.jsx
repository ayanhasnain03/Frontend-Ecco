import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Line} from "react-chartjs-2";
import { getLastMonths } from "../../utils/feature";
const {  last6Months } = getLastMonths();
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = last6Months;

export const BarChart = ({
  data_1 = [],
  title_1,
  bgColor_1,
  horizontal = false,
  labels = months,
}) => {
  const options = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Change text color of the legend
        },
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          color: 'white', // Change color of grid lines to white
        },
        ticks: {
          color: 'white', // Change color of ticks to white
        },
      },
      x: {
        grid: {
          display: false,
          color: 'white', // Change color of grid lines to white
        },
        ticks: {
          color: 'white', // Change color of ticks to white
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    
    ],
  };

  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
};

export const LineChart = ({
  data_1 = [],
  borderColor,
  title_1,
  horizontal = false,
  labels = months,
})=>{
  const options={
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Change text color of the legend
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          color: 'white', // Change color of grid lines to white
        },
        ticks: {
          color: 'white', // Change color of ticks to white
        },
      },
      x: {
        grid: {
          display: false,
          color: 'white', // Change color of grid lines to white
        },
        ticks: {
          color: 'white', // Change color of ticks to white
        },
      },
    },
  }
  const data = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
    fill: false,
    borderColor: borderColor,
    tension: 0.1
      },
    
    ],
  };

  return <Line width={horizontal ? "200%" : ""} options={options} data={data} />;
}