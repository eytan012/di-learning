import React,{useEffect,useState} from "react";
import '../App.css';
import DisplayWeather from "./DisplayWeather";
import loadingImg from '../loading.gif'



const SearchWeather = ()=> {

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [weather, setWeather] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(()=>{
    //     console.log(weather)
    // },[weather])

    const handleCityState = (e) => {
        setCity(e.target.value)
    }
    const handleCountryState = (e) => {
        setCountry(e.target.value)
    }

    const getWeather = () => {
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=91d53b403fdb6afbfc5f6a7ed98068d0&units=metric`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                handleWeather({
                    name: data.name,
                    temp: data.main.temp,
                    humi: data.main.humidity,
                    status: data.weather[0].main
                })
                setLoading(false)
            })
            .catch(e => console.log(e))
    }

    const handleWeather = (obj) => {
        setWeather(obj)
    }
    console.log(weather)
    return (
        <div>
            <div className={'search-weather'}>
                <input type="text" onChange={handleCityState} placeholder={'Enter city'}/>
                <input type="text" onChange={handleCountryState} placeholder={'Enter country'}/>
                <button onClick={getWeather}>Get weather</button>
            </div>
            <div>
                {loading ? <img src={loadingImg}/> : weather.name ? <DisplayWeather weather={weather}/> : null}

            </div>
        </div>
    )
}

export default SearchWeather;

