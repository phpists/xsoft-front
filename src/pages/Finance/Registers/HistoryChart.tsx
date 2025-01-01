// @ts-nocheck
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { CachesTransactionResponse } from "../../../types/finance";

interface Props {
  transactions: CachesTransactionResponse[];
}

export const HistoryChart = ({ transactions }: Props) => {
  const handleFormatDate = (dateString: string) => {
    const [d, hours] = dateString?.split(" ");
    const [date, month, year] = d?.split(".");

    return `${year}-${month}-${date}`;
  };

  const [state, setState] = useState({
    series: [
      {
        name: "Cash Flow",
        data:
          transactions?.map(({ amount, type_id }) =>
            type_id === "Списання" ? -amount : amount
          ) ?? [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "rgb(237, 94, 30)",
              },
              {
                from: -45,
                to: 0,
                color: "rgb(237, 94, 30)",
              },
              {
                from: 0,
                to: 100,
                color: "rgb(46, 176, 98)",
              },
            ],
          },
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: function (y) {
            // return y.toFixed(0) + "%";
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories:
          transactions?.map(({ created_at }) => handleFormatDate(created_at)) ??
          [],
        labels: {
          rotate: -90,
        },
      },
    },
  });

  useEffect(() => {
    setState({
      series: [
        {
          name: "Cash Flow",
          data: transactions?.map(({ amount, type_id }) => amount) ?? [],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "rgb(237, 94, 30)",
                },
                {
                  from: -45,
                  to: 0,
                  color: "rgb(237, 94, 30)",
                },
                {
                  from: 0,
                  to: 100,
                  color: "rgb(46, 176, 98)",
                },
              ],
            },
            columnWidth: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          title: {
            text: "Growth",
          },
          labels: {
            formatter: function (y) {
              // return y.toFixed(0) + "%";
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories:
            transactions?.map(({ created_at }) =>
              handleFormatDate(created_at)
            ) ?? [],
          labels: {
            rotate: -90,
          },
        },
      },
    });
  }, [transactions]);

  return (
    <StyledHistoryChart>
      <SectionTitle title="Історія балансу каси" />
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </StyledHistoryChart>
  );
};

const StyledHistoryChart = styled.div`
  margin-bottom: 20px;
  #chart {
    background: #fff;
  }
`;
