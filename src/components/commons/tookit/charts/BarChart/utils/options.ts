import { ApexOptions } from "apexcharts";

interface GetOptionsParams {
  categories: string[];
  series: ApexAxisChartSeries;
}

export function getOptions({ categories }: GetOptionsParams): ApexOptions {
  return {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: "#666",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#666",
          fontSize: "12px",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: "50%",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ["#ff66cc"],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 90, 100],
        colorStops: [],
      },
    },
    colors: ["#ff1493"],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "light",
    },
    legend: {
      show: true,
    },
  };
}
