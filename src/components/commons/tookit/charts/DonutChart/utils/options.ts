import { ApexOptions } from "apexcharts";

interface GetOptionsParams {
  categories: string[];
  series: ApexNonAxisChartSeries;
}

export function getOptions({ categories }: GetOptionsParams): ApexOptions {
  return {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    labels: categories,
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
      formatter: function (val: number) {
        return `${val.toFixed(1)}%`;
      },
    },
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
      style: {
        fontSize: "14px",
      },
      y: {
        formatter: function (val: number) {
          return `${val}`;
        },
      },
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: "14px",
              formatter: (val: string) => `${parseFloat(val).toFixed(0)}`,
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              formatter: function (w: { globals: { seriesTotals: number[] } }) {
                const total = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
                return `${total}`;
              },
            },
          },
        },
        expandOnClick: false,
      },
    },

    states: {
      hover: {
        filter: {
          type: "darken",
        },
      },
    },

    colors: ["#FDC3CF", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A"],
  };
}
