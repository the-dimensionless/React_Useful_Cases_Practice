import React, { Component } from 'react';
import zc from "@dvsl/zoomcharts";

let TimeChart = zc.TimeChart;

// Zoomcharts license and license key
window.ZoomChartsLicense = "";
window.ZoomChartsLicenseKey = "";

const ZoomChartEx = () => {

    return (
        <div>
            <p>Hello</p>
            <ZoomCharts />
        </div>
    )
};

export default ZoomChartEx;



class ZoomCharts extends Component {
 componentDidMount() {
   //
   let t = new TimeChart({
     container: document.getElementById("chartTimeChart"),
     area: { height: 350 },
     data: {
       preloaded: {
         values: [
           ["2017-01-09 00:00:00", 100],
           ["2017-01-20", 200],
           [1485907200, 300],
           ["2017-02-05 15:20:00", 400],
           ["2017-02-15 22:59:59", 500]
         ],
         dataLimitFrom: "2017-01-09 00:00:00",
         dataLimitTo: "2017-02-15 22:59:59",
         unit: 's'
       }
     }
   });
 }

 render() {
   return (
     <div className="chart-wrapper">
       <div id="chartTimeChart" className="chart"></div>
     </div>
   );
 }
}