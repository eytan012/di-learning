import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {reducer} from "./redux/reducers";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk,logger))


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
