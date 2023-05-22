import { FunctionComponent } from "react";
import { IPriceListItem } from "../../interfaces/product";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Loading from "../UI/Loading";

interface ICurrentProdChProps {
  data: IPriceListItem[] | undefined;
  loading: boolean;
}

const ChartTooltip = (price: number, date: string) => {
  return (
    "<div class='px-6 py-3'>" +
    "<div class='flex items-center'>" +
    "<div class='w-3 h-3 rounded-[50%] bg-[#319b16] mr-1'></div>" +
    "<span class='font-semibold'>Price: </span>" +
    price +
    "$" +
    "</div>" +
    "<div class='flex items-center'>" +
    "<div class='w-3 h-3 rounded-[50%] bg-[#fcc921] mr-1'></div>" +
    "<span class='font-semibold'>Date: </span>" +
    date +
    "</div>" +
    "</div>"
  );
};
const CurrentProdPriceChart: FunctionComponent<ICurrentProdChProps> = ({
  data = [],
  loading = false,
}) => {
  const chart: { series: ApexAxisChartSeries; options: ApexOptions } = {
    series: [
      {
        name: "Product price",
        data: data.map((item: IPriceListItem) => item.price),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Product price statics",
        align: "left",
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: data.map((item: IPriceListItem) => item.date),
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return ChartTooltip(
            series[seriesIndex][dataPointIndex],
            w.globals.categoryLabels[dataPointIndex]
          );
        },
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  };
  return (
    <div className="pt-10">
      {loading ? (
        <Loading />
      ) : (
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="line"
          height={350}
        />
      )}
    </div>
  );
};

export default CurrentProdPriceChart;
