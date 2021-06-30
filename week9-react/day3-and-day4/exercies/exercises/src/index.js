import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Daily from "./Daily";
import MemorieGame from "./components/MemorieGame";
import AppRouterPractice from "./AppRouterPractice";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*  <Daily/>*/}
        {/*  <MemorieGame/>*/}


        <BrowserRouter>
            <AppRouterPractice/>
        </BrowserRouter>



    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
