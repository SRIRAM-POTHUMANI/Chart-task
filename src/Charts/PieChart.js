import { ArcElement, CategoryScale, Legend, LinearScale, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Chart, BarElement } from "chart.js";
import { Pie } from "react-chartjs-2";


Chart.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const [chart, setChart] = useState([]);

  const baseURL = "https://api.coinranking.com/v2/coins/?limit=5&orderBy=price";

  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "coinranking6e65ee2b090b7b5d3fb34de768334fcf693ebfb6ff516373";

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyURL}${baseURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${apiKey}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setChart(json.data);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCoins();
  }, [baseURL, proxyURL, apiKey]);
  const data = {
    labels: chart?.coins?.map((x) => x.name),
    datasets: [
      {
        label: `${chart?.coins?.length} Coins Available`,
        data: chart?.coins?.map((x) => x.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} height={400} />
    </div>
  );
}

export default PieChart;
