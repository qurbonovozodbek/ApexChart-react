import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import data from "../assets/data.json";

const Euro = () => {
  const [chartData, setChartData] = useState(() => {
    const seriesData = data.euro1.map((timestamp, index) => ({
      x: timestamp,
      y: parseFloat(data.euro2[index]),
    }));

    return {
      series: [
        {
          name: "EUR",
          data: seriesData,
          color: "#f700ff",
        },
      ],
      options: {
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: true,
        },
        markers: {
          size: 2,
        },
        title: {
          text: "EURO Evolution",
          align: "center",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1.5,
            inverseColors: true,
            opacityFrom: 0.5,
            opacityTo: 1.5,
            stops: [0],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: true,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
        },
      },
    };
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Euro;
