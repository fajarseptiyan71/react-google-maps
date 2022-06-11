import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  labels,
  datas,
  backgroundColor,
  borderColor,
  cutout,
  borderWidth,
  legendPosition,
  datasetLabel,
}) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: datasetLabel,
        data: datas,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        cutout: cutout,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: legendPosition,
        labels: {
          usePointStyle: true,
          generateLabels: (chart) => LegendText(chart),
        },
      },
    },
  };

  function LegendText(chart) {
    const datasets = chart.data.datasets;
    return datasets[0].data.map((data, index) => ({
      text: `${chart.data.labels[index]} ${data}`,
      fillStyle: datasets[0].backgroundColor[index],
    }));
  }

  return <Doughnut data={data} options={options} />;
}

Doughnut.propTypes = {
  datas: PropTypes.array,
  backgroundColor: PropTypes.array,
  borderColor: PropTypes.array,
  cutout: PropTypes.string,
  borderWidth: PropTypes.number,
  legenPosition: PropTypes.string,
};
