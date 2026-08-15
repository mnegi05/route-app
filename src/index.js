import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainComponent from './components/myPortal/mainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CoursesMainComponent from './components/courses/coursesMainComponent';
import LaptopMainComponent from './components/laptop/mainComponent';
import CompanyMainComponent from './components/jx_company/mainComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainComponent /> */}
      {/* <CoursesMainComponent /> */}
      {/* <LaptopMainComponent /> */}
      <CompanyMainComponent />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
