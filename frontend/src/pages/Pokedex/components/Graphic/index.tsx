import { useState } from "react";
import Chart from "react-apexcharts";

interface BarChartProps {
  categories: string[] | number[];
  data: number[];
}

export const BarChart = ({ categories, data }: BarChartProps) => {

  const colorsArray = ['#F44336', '#E91E63', '#9C27B0', '#FF9800', '#4CAF50', '#2196F3'];
  const [chartData] = useState<any>({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
            show: false,
          },
      },
      plotOptions: {
        bar: {
            horizontal: true,
            borderRadius: 4
        }
      },
      xaxis: {
        categories: categories
      },
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          colors: ['#FFF']
        }
      }
    },
    series: [
      {
        name: "Valor",
        data: data.map((value, index) => ({
            x: categories[index],
            y: value,
            fillColor: colorsArray[index % colorsArray.length],
        })),
      }
    ]
  });

  return <Chart options={chartData.options} series={chartData.series} type="bar" height="150" />;
};