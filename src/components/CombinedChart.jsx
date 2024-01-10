import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
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

const CombinedChart = ({filteredData}) => {
 const [emission22,setEmission22]=useState([])
 const [emission23,setEmission23]=useState([])
 const [re22,setRe22]=useState([])
 const [re23,setRe23]=useState([])
 useEffect(() => {
 
  const emissionsData2022 = filteredData
    .filter((item) => item.year === 2022)
    .map((item) => item.emissions);

  const emissionsData2023 = filteredData
    .filter((item) => item.year === 2023)
    .map((item) => item.emissions);
    const reData2022 = filteredData
    .filter((item) => item.year === 2022)
    .map((item) => item.re);

  const reData2023 = filteredData
    .filter((item) => item.year === 2023)
    .map((item) => item.re);

  setEmission22(emissionsData2022);
  setEmission23(emissionsData2023);
  setRe22(reData2022)
  setRe23(reData2023)
}, [filteredData]);


  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Emission-2023",
        backgroundColor: "#546fc6",
        data: emission23,
        borderColor: "white",
        borderWidth: 2,
        yAxisID: "bar-y-axis",
      },
      {
        type: "bar",
        label: "Emission-2022",
        backgroundColor: "#91cb73",
        data:emission22,
        yAxisID: "bar-y-axis",
      },
      {
        type: "line",
        label: "R/E-2023",
        borderColor: "#f9c561",
        borderWidth: 1,
        fill: false,
        data: re23,
        yAxisID: "line-y-axis",
      },
      {
        type: "line",
        label: "R/E-2022",
        borderColor: "#e07374",
        borderWidth: 1,
        fill: false,
        data: re22,
        yAxisID: "line-y-axis",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
      },
      "bar-y-axis": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Emission",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      "line-y-axis": {
        type: "linear",
        position: "right",
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "R/E",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <Box w={"92%"} ml={"20px"} borderRadius={"8px"}>
      <Chart type="bar" data={data} options={options} />;
    </Box>
  );
};

export default CombinedChart;
