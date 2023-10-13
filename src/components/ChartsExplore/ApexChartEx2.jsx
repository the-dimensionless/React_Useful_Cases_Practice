import React from "react";
import Chart from "react-apexcharts";

const ApexChartEx2 = () => {
  return (
    <ApexChart />
  )
};

export default ApexChartEx2;

const ApexChart = () => {
  const events = {
    beforeZoom: (e, { xaxis }) => {
      let zoomdifference = xaxis.max - xaxis.min;
      console.log("Zoom Diff ", zoomdifference);
    }
  }
  const options = {
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: true
      },
      tickAmount: 17,
      labels: {
        datetimeUTC: false
      }
    },
    grid: {
      padding: {
         left: 0,
         right: 0
      }
  },
    fill: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "center"
        }
      }

    },
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false
        }
      },
      events: {
        beforeZoom: (event, axis) => {
          // let zoomdifference =   xaxis.max - xaxis.min ;
          // console.log("Zoom Diff ", zoomdifference, xaxis);
          const o = event.w.config.xaxis;
          console.log("Event ", event.w.config.xaxis, axis.xaxis)
          console.log("---", new Date(axis.xaxis.min), new Date(axis.xaxis.max));
          const date1 = new Date(axis.xaxis.min);
          const date2 = new Date(axis.xaxis.max);
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          console.log(diffTime + " milliseconds");
          console.log(diffDays + " days");
          if (diffDays < 3) {
            return {
              // keep on zooming
              xaxis: {
                  min: o.min,
                  max: o.max
              }
          }
          
           
          } else {
            return {
                   // keep on zooming
                   xaxis: {
                       min: axis.xaxis.min,
                       max: axis.xaxis.max
                   }
               }
          }
        }
      }
    }
  };

  function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
    ], [
      2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    //console.log("Returning ", series);
    return series;
  }

  const series = [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  },
  ];
  
  return <Chart events={events} options={options} series={series} type="line" />;
};
