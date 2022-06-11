import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HorizontalBar({
  labels,
  datas,
  backgroundColor,
  datasetLabel,
  legendPosition,
}) {
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: datasetLabel,
        data: datas,
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    responsive: true,
    bezierCurve: false,
    plugins: {
      legend: {
        position: legendPosition,
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}
