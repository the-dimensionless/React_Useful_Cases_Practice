import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';
import 'chartjs-plugin-zoom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ChartJSEx() {
    const zoomOptions = {
        pan: {
          enabled: true,
          modifierKey: 'ctrl',
        },
        zoom: {
          drag: {
            enabled: true,
          },
          mode: 'xy',
        },
      };
      // </block>
      
    const panStatus = () => zoomOptions.pan.enabled ? 'enabled' : 'disabled';
    const zoomStatus = () => zoomOptions.zoom.drag.enabled ? 'enabled' : 'disabled';
    const options = {
        responsive: true,
        title: { display: true, text: 'My Chart' },
        zoom: {
          enabled: true,
          mode: 'x',
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
      };
  return (
    <div style={{maxHeight: '900px', maxWidth: '900px'}}>
        <Line options={options} data={data} />
    </div>
  );
}
