// External Libraries
import React from "react";
import dynamic from "next/dynamic";

// Utils
import { getOptions } from "./utils";

// Types
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  series: ApexNonAxisChartSeries;
  isLoading?: boolean;
  categories: string[];
  specificOptions?: ApexOptions;
}
export const DonutChart: React.FC<Props> = ({
  series,
  isLoading,
  categories,
  specificOptions,
}) => {
  // Constants
  const options = getOptions({ series, categories });
  const isEmpty = series.map((value) => value === 0).every((value) => value);

  if (isLoading) return;

  if (isEmpty) return;

  return (
    <Chart
      type="donut"
      width="100%"
      height="100%"
      series={series}
      options={{ ...options, ...specificOptions }}
    />
  );
};
