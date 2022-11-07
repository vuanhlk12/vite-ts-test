import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { selectOptions } from "./temp";
import moment from "moment";
import "moment/dist/locale/vi";

moment.locale("vi");
console.log("123213", moment.locale());

const chartOptionsTemp: Highcharts.Options = {
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
  },
  yAxis: {
    title: {
      text: "Value",
    },
    minPadding: 0.2,
    maxPadding: 0.2,
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
          click: () => {},
        },
      },
    },
  },
  series: [
    {
      type: "scatter",
      data: [
        [20, 20],
        [80, 80],
      ],
    },
    {
      type: "scatter",
      data: [
        [80, 20],
        [90, 100],
        {
          x: 30,
          y: 50,
          marker: {
            symbol: "url(https://www.highcharts.com/samples/graphics/sun.png)",
          },
          accessibility: {
            description:
              "Sunny symbol, this is the warmest point in the chart.",
          },
        },
      ],
    },
  ],
};

function getData(n: number) {
  var arr = [],
    i,
    x,
    a = 0,
    b = 0,
    c = 0,
    spike;
  for (
    i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - (n * 36000000) / 8;
    i < n;
    i = i + 1, x = x + 36000000 / 8
  ) {
    if (i % 100 === 0) {
      a = 2 * Math.random();
    }
    if (i % 1000 === 0) {
      b = 2 * Math.random();
    }
    if (i % 10000 === 0) {
      c = 2 * Math.random();
    }
    if (i % 50000 === 0) {
      spike = 10;
    } else {
      spike = 0;
    }
    arr.push([x, 2 * Math.sin(i / 100) + a + b + c + spike + Math.random()]);
  }
  return arr;
}
var n = 500,
  data = getData(n);

const tempoption: Highcharts.Options = {
  chart: {
    marginTop: 80,
    marginLeft: 60,
    marginRight: 60,
  },
  title: {
    text: "",
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0,
      shadow: false,
    },
    line: {
      marker: {
        enabled: false,
      },
    },
  },
  xAxis: {
    type: "datetime",
    labels: {
      formatter: function (value) {
        console.log("moment");
        return moment(value.pos).format("MMM Do YY");
      },
    },
  },
  yAxis: [
    {
      labels: {
        format: "{value}",
        style: {
          color: "rgba(0, 0, 0, 0.7)",
          fontSize: "12px",
        },
      },
      title: {
        align: "high",
        rotation: 0,
        textAlign: "left",
        y: -20,
        x: 13,
        text: "Tỷ đồng",
      },
    },
    {
      title: {
        align: "high",
        rotation: 0,
        x: -13,
        y: -20,
        textAlign: "right",
        text: "%",
      },
      labels: {
        format: "{value}",
        style: {
          color: "rgba(0, 0, 0, 0.7)",
          fontSize: "12px",
        },
      },
      opposite: true,
    },
  ],
  tooltip: {
    valueDecimals: 2,
    // formatter: (...arg) => {
    //   console.log("arg", arg);
    //   return "";
    // },
    xDateFormat: "%Y-%m-%d",
  },
  legend: {
    itemStyle: {
      fontWeight: "400",
      fontFamily:
        '"SF Pro Display", "Roboto", "Helvetica Neue", Arial, sans-serif',
    },
  },
  series: [
    {
      name: "Số mã tạo đỉnh 52 tuần",
      type: "area",
      data: getData(200).map((item) => {
        item[1] += 10;
        return item;
      }),
      yAxis: 0,
      tooltip: {
        // valueSuffix: "Tỷ đồng",
      },
      color: "#429717",
    },
    {
      name: "VNINDEX",
      type: "line",
      data: getData(200),
      yAxis: 1,
      tooltip: {
        // valueSuffix: "%",
      },
      color: "#FE952B",
    },
  ],
};

const temp = {
  dateList: ["yyyy-mm-dd", "yyyy-mm-dd", "yyyy-mm-dd", "yyyy-mm-dd"],
  chartData: [
    {
      name: "Số mã tạo đỉnh 52 tuần",
      type: "column",
      data: [148.905767271, 157.061043789, 48.372928004, 35.406959558],
      yAxis: 0,
      valueSuffix: "%",
      color: "#52C41A",
    },
    {
      name: "VNINDEX",
      type: "line",
      data: [
        9.000281518526464, 10.958611850356636, 9.55936265515931,
        8.680972893679535,
      ],
      yAxis: 1,
      valueSuffix: "",
      color: "#FE952B",
    },
  ],
  tableData: [
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
    { stockName: "SJC", rs: 48.23, TpScore: 7.9 },
  ],
};

const ChartTest: FC = (props) => {
  console.log("selectOptions", selectOptions);
  return (
    <div style={{ width: "50%", height: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={tempoption} />
    </div>
  );
};

export default ChartTest;
