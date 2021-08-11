import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  //  strictMode开启严格模式，校验相关代码
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//web相关报告
reportWebVitals();
