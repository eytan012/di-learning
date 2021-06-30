import React from "react";
import '../App.css';
import loadingImg from '../loading.gif'





const DisplayWeather = ({weather}) => {
    return (

        <div>

            <div className={'jumbotron'}>
                <div className={'container'}>
                    <h3>Location: {weather.name}</h3>
                    <h3>Temperature: {weather.temp}</h3>
                    <h3>Humidity: {weather.humi}</h3>
                    <h3>Condition: {weather.status}</h3>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather;

