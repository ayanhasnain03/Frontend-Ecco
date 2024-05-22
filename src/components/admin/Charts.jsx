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
import { Bar, Doughnut, Line} from "react-chartjs-2";
import { getLastMonths } from "../../utils/feature";
const {  last6Months,last12Months } = getLastMonths();
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
        fill: true,
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(0, 255, 127, 0.76)',
      },
    
    ],
  };

  return <Line width={horizontal ? "200%" : ""} options={options} data={data} />;
}

export const VerticalBarChart = ({
  data_1 = [],
  data_2 =[], 
  data_3 =[], 
  title_1,
  title_2,
  title_3,
  labels = last12Months,
})=>{
  const options = {
    responsive: true,
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
        fill: true,
        backgroundColor: 'rgba(0, 255, 127, 0.76)',
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: 'blue',
      },
      {
        label: title_3,
        data: data_3,
        backgroundColor: 'red',
      },
    
    ],
  };
  return <Bar options={options} data={data} />;
}


// Define the DoughnutChart component
export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}) => {
  const doughnutData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: 'bottom',
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

