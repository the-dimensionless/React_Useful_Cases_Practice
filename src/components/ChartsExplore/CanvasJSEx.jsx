import CanvasJSReact from '@canvasjs/react-charts';
import React, {Component} from 'react';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvadJSEx = () => {

    return (
        <div id="chartContainer">
            <App />

        </div>
    )
};

export default CanvadJSEx;

//Create Chart
class App extends Component {
    constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
	}
	
	generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: new Date(2012, 1, xVal),y: yVal});	
			xVal = xVal+1 % 30;
		}
		return dps;
	}
    render() {
      const options = {
        zoomEnabled: true, 
        title: {
          text: "Basic Column Chart in React"
        },
        axisX:{
            title: "timeline",
            gridThickness: 1
        },
        data: [{
          type: "column",
          dataPoints: this.generateDataPoints(500)
        //   dataPoints: [
        //     { label:  new Date(2012, 1, 2),  y: 10  },
        //     { label:  new Date(2012, 1, 3), y: 15  },
        //     { label:  new Date(2012, 1, 4), y: 25  },
        //     { label:  new Date(2012, 2, 2),  y: 10  },
        //     { label:  new Date(2012, 3, 3), y: 15  },
        //     { label:  new Date(2012, 5, 4), y: 25  },
        //     { label:  new Date(2012, 1, 5),  y: 30  },
        //     { label:  new Date(2012, 1, 6),  y: 28  },
        //     { label:  new Date(2012, 1, 7),  y: 28  },
        //     { label:  new Date(2012, 1, 8),  y: 28  },
        //   ]
        }]
      }
              
      return (
        <div >
          <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }