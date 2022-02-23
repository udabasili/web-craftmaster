import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/styles.css';
import "./assets/vendors/css/LineIcons.css";
import "./assets/vendors/css/default.css";
import "./assets/vendors/css/responsive.css";


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

