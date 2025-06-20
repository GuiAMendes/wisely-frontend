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
  series: ApexAxisChartSeries;
  isLoading?: boolean;
  categories: string[];
  specificOptions?: ApexOptions;
}

export const BarChart: React.FC<Props> = ({
  series,
  isLoading,
  categories,
  specificOptions,
}) => {
  const options = getOptions({ categories, series });

  if (isLoading) return null;
  if (!series) return null;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chart
        type="bar"
        series={series}
        options={{ ...options, ...specificOptions }}
        width="100%"
        height="100%"
      />
    </div>
  );
};
