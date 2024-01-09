import React, { Component } from "react";
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

const CombinedChart = () => {
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
        data: [200, 100, 100, 300, 600, 700, 500, 100, 300, 600, 700, 500],
        borderColor: "white",
        borderWidth: 2,
        yAxisID: "bar-y-axis",
      },
      {
        type: "bar",
        label: "Emission-2022",
        backgroundColor: "#91cb73",
        data: [200, 100, 100, 300, 600, 700, 500, 100, 300, 600, 700, 500],
        yAxisID: "bar-y-axis",
      },
      {
        type: "line",
        label: "R/E-2023",
        borderColor: "#f2cc79",
        borderWidth: 1,
        fill: false,
        data: [160, 15, 10, 30, 25, 7, 50, 10, 30, 25, 7, 50],
        yAxisID: "line-y-axis",
      },
      {
        type: "line",
        label: "R/E-2022",
        borderColor: "#e87174",
        borderWidth: 1,
        fill: false,
        data: [16, 150, 100, 45, 50, 70, 70, 100, 45, 50, 70, 70],
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
