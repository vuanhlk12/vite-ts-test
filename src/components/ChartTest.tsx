import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const chartOptionsTemp = {
  chart: {
    type: "scatter",
    margin: [70, 50, 60, 80],
  },
  title: {
    text: "User supplied data",
  },
  subtitle: {
    text: "Click the plot area to add a point. Click a point to remove it.",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    gridLineWidth: 1,
    minPadding: 0.2,
    maxPadding: 0.2,
    maxZoom: 60,
  },
  yAxis: {
    title: {
      text: "Value",
    },
    minPadding: 0.2,
    maxPadding: 0.2,
    maxZoom: 60,
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  legend: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    series: {
      lineWidth: 1,
      point: {
        events: {
          click: () => {
            if ((this as any)?.series.data.length > 1) {
              (this as any)?.remove();
            }
          },
        },
      },
    },
  },
  series: [
    {
      data: [
        [20, 20],
        [80, 80],
      ],
    },
    {
      data: [
        [80, 20],
        [90, 100],
      ],
    },
  ],
};

const ChartTest: FC = (props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptionsTemp} />
    </div>
  );
};

export default ChartTest;
