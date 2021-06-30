import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Errorhandling from "./Errorhandling";
import Quotes from "./Quotes";

ReactDOM.render(
  <React.StrictMode>
    <Quotes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
