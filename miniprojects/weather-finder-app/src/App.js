import './App.css';
import DisplayWeather from "./components/DisplayWeather";
import Header from "./components/Header";
import SearchWeather from "./components/SearchWeather";

function App() {
    return (
        <div>
            <Header/>
            <SearchWeather/>
        </div>
    );
}

export default App;
