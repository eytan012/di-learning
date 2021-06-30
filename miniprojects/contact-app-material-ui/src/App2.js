import React, {useState, useEffect} from 'react';
import axios from "axios";
import './test.css'


const App2 = () => {
    const [name, setName] = useState("New York");
    const [unit, setUnit] = useState("metric");
    const [weather, setWeather] = useState({});


    const fetchData = (name) => {
        const key = "a18a8387a4877c6bc3621b50280b3ddf";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=${unit}`;
        axios.get(url).then((response) => {
            if (response && response.data && response.status === 200) {
                const { city, country, temperture, humidity, windSpeed, description, error } = response.data
                setWeather(response.data);
            }
        });
    };


    useEffect(() => {
        fetchData(name);
    }, []);

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetchData(name)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder={'Enter City...'}
                       onChange={(e)=>setName(e.target.value)}
                       style={{margin:'10px',padding:'10px'}}/>
                <button type={"submit"} style={{margin:'10px',padding:'10px'}}>
                    Search
                </button>
                <br></br>
                Celsius
                <input type="radio" name="temp" value="celsius" />
                Fahrenheit
                <input type="radio" name="temp" value="fahrenheit" /><br></br>
            </form>
            <div>
                <h1>Weather Finder</h1>
                <h3>Find out temperature, condition and more...</h3>
                <h2>{name}</h2>
                {/* Location: {city}, {country}<br></br>
              Temperture: {temperture}<br></br>
              Humidity: {humidity}<br></br>
              Wind Speed: {windSpeed}<br></br>
              Description: {description}<br></br> */}
                {weather.main && <div>{unit == 'metric' ? weather.main.temp+' C': weather.main.temp+' F'}</div>}
            </div>
            <div className={'test'}>
                TEST
            </div>
        </>
    );
};
export default App2;