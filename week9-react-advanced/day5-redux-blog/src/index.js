import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import rootReducer from './store/rootReducer'
import {Provider} from "react-redux";
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
