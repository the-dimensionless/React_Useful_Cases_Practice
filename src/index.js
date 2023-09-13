import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SplitView from './pages/SplitView';
import WebWorkerDemo from './pages/WebWorkerDemo';
import ReactSelectDemo from './pages/react-select-demo';
import Icon from './components/IconComponent';
import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';
import NewHooksEx from './components/NewHooksEx';
import SignalsDemo from './pages/SignalsDemo';
import CustomHooksDemo from './pages/CustomHooksDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    // <SplitView />
    // <WebWorkerDemo />
    // <ReactSelectDemo />

    // <DatePickerProvider>
    // <Icon />
    // </DatePickerProvider>

    // <NewHooksEx />
    // <SignalsDemo />
    <CustomHooksDemo />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
